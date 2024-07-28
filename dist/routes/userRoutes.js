"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const jwt_1 = require("../jwt/jwt");
const userRouter = express_1.default.Router();
// ADD USER
userRouter.post("/user", userController_1.addUser);
// LOGIN USER
userRouter.post("/user/login", userController_1.loginUser);
// CHANGE PASSWORD
userRouter.put("/user", jwt_1.validateToken, userController_1.changePassword);
//REFRESH TOKEN
userRouter.get("/user/renew", jwt_1.refreshToken);
// LOG OUT USER
userRouter.post("/user/logout", userController_1.logoutUser);
exports.default = userRouter;
