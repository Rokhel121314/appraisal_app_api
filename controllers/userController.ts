import { generateRefreshToken, generateToken } from "../jwt/jwt";
import User from "../models/userModel";
import { Request, Response } from "express";
const bcrypt = require("bcrypt");

export type UserType = {
  email: string;
  full_name: string;
  role: string;
  password: string;
  _id: string;
};

// ADD USER

export const addUser = async (req: Request, res: Response) => {
  const userPayload: UserType = req.body;

  const hashPassword = bcrypt.hashSync(userPayload.password, 10);

  try {
    const exist = await User.findOne({ email: userPayload.email }).exec();
    if (exist) {
      res.status(409).json({
        message: "EMAIL ALREADY IN USE!",
      });
    } else {
      const user = await User.create({
        ...userPayload,
        password: hashPassword,
      });
      res.status(200).json({
        email: user.email,
        full_name: user.full_name,
        role: user.role,
        user_id: user._id,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// LOG IN USER
export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  console.log("email:", email);

  try {
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      res.status(404).json({ message: "ENTERED WRONG EMAIL!" });
    } else {
      const checkPassword = await bcrypt.compareSync(password, user.password);

      if (!checkPassword) {
        res.status(400).json({ message: "ENTERED WRONG PASSWORD!" });
      } else {
        const accessToken = await generateToken({
          user_id: user._id.toString(),
          email: user.email,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          path: "/",
        });

        const refreshToken = await generateRefreshToken({
          user_id: user._id.toString(),
          email: user.email,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          path: "/",
        });
        res.status(200).json({
          email: user.email,
          role: user.role,
          full_name: user.full_name,
          user_id: user._id,
        });
        localStorage.setItem("access-token", accessToken);
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// CHANGE PASSWORD

export const changePassword = async (req: Request, res: Response) => {
  const { email, new_password }: { email: string; new_password: string } =
    req.body;

  const hashPassword = await bcrypt.hashSync(new_password, 10);

  try {
    const exist = await User.findOne({ email: email }).exec();
    if (!exist) {
      res.status(404).json({ message: "NO USER FOUND!" });
    } else {
      const user = await User.updateOne(
        { email: email },
        { $set: { password: hashPassword } }
      );
      if (user.modifiedCount > 0) {
        res.status(200).json(user);
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// LOG OUT USER

export const logoutUser = async (req: Request, res: Response) => {
  try {
    res.cookie("access_token", "1");
    res.cookie("refresh_token", "1");

    res.status(200).json({ message: "USER LOGOUT!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
