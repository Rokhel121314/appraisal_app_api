import express from "express";
import {
  addUser,
  loginUser,
  changePassword,
  logoutUser,
} from "../controllers/userController";
import { refreshToken, validateToken } from "../jwt/jwt";

const userRouter = express.Router();

// ADD USER
userRouter.post("/user", addUser);

// LOGIN USER
userRouter.post("/user/login", loginUser);

// CHANGE PASSWORD
userRouter.put("/user", validateToken, changePassword);

//REFRESH TOKEN
userRouter.post("/user/refresh", refreshToken);

// LOG OUT USER
userRouter.post("/user/logout", logoutUser);

export default userRouter;
