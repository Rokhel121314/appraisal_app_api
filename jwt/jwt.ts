import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN_SECRET: string | undefined =
  process.env.ACCESS_TOKEN_SECRETE_KEY;
const REFRESH_TOKEN_SECRET: string | undefined =
  process.env.REFRESH_TOKEN_SECRETE_KEY;

interface CustomRequest extends Request {
  user?: { user_id: string; email: string };
}

// GENERATE TOKEN
export const generateToken = ({
  user_id: user_id,
  email: email,
}: {
  user_id: string;
  email: string;
}) => {
  const token = jwt.sign({ user_id, email }, ACCESS_TOKEN_SECRET as string, {
    expiresIn: "10m",
  });
  return token;
};

// VERIFY TOKEN
export const validateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["access_token"];

  if (!token) {
    return res.status(403).json({ message: "USER NOT AUTHENTICATED!" });
  } else {
    try {
      const user = jwt.verify(token, ACCESS_TOKEN_SECRET as string) as {
        user_id: string;
        email: string;
      };
      req.user = user;

      next();
    } catch (error) {
      res.status(401).json({ message: "You are not authenticated!" });
    }
  }
};

// GENERATE REFRESH TOKEN

export const generateRefreshToken = ({
  user_id: user_id,
  email: email,
}: {
  user_id: string;
  email: string;
}) => {
  const token = jwt.sign({ user_id, email }, REFRESH_TOKEN_SECRET as string, {
    expiresIn: "12h",
  });
  return token;
};

//REFRESH TOKEN

export const refreshToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["refresh_token"];

  if (!token) {
    return res.status(403).json({ message: "NOT AUTHORIZED!" });
  } else {
    try {
      const user = jwt.verify(token, REFRESH_TOKEN_SECRET as string) as {
        user_id: string;
        email: string;
      };
      if (!user) {
        return res.status(403).json({ message: "INVALID TOKEN!" });
      } else {
        const accessToken = generateToken({
          user_id: user.user_id,
          email: user.email,
        });

        res.cookie("access_token", accessToken);

        const refreshToken = generateRefreshToken({
          user_id: user.user_id,
          email: user.email,
        });

        res.cookie("refresh_token", refreshToken);

        res.status(200).json({ message: "TOKEN REFRESHED!" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
};

// LOGGED OUT TOKEN

export const logoutToken = () => {
  const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET as string, {
    expiresIn: "1s",
  });
  const accessToken = jwt.sign({}, REFRESH_TOKEN_SECRET as string, {
    expiresIn: "1s",
  });
  return [accessToken, refreshToken];
};
