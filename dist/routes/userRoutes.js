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
userRouter.get("/user", userController_1.loginUser);
// CHANGE PASSWORD
userRouter.put("/user", jwt_1.validateToken, userController_1.changePassword);
//REFRESH TOKEN
userRouter.post("/user/refresh", jwt_1.refreshToken);
exports.default = userRouter;
