import express from "express";
import {
  addUser,
  loginUser,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

// ADD USER
userRouter.post("/user", addUser);

// LOGIN USER
userRouter.get("/user", loginUser);

// CHANGE PASSWORD
userRouter.put("/user", changePassword);

export default userRouter;
