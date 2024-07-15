"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.generateRefreshToken = exports.validateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRETE_KEY;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRETE_KEY;
// GENERATE TOKEN
const generateToken = ({ user_id: user_id, email: email, }) => {
    const token = jsonwebtoken_1.default.sign({ user_id, email }, ACCESS_TOKEN_SECRET, {
        expiresIn: "10m",
    });
    return token;
};
exports.generateToken = generateToken;
// VERIFY TOKEN
const validateToken = (req, res, next) => {
    const token = req.cookies["access_token"];
    if (!token) {
        return res.status(403).json({ message: "USER NOT AUTHENTICATED!" });
    }
    else {
        try {
            const user = jsonwebtoken_1.default.verify(token, ACCESS_TOKEN_SECRET);
            req.user = user;
            next();
        }
        catch (error) {
            res.status(401).json({ message: "You are not authenticated!" });
        }
    }
};
exports.validateToken = validateToken;
// REFRESH TOKEN
const generateRefreshToken = ({ user_id: user_id, email: email, }) => {
    const token = jsonwebtoken_1.default.sign({ user_id, email }, REFRESH_TOKEN_SECRET, {
        expiresIn: "12h",
    });
    return token;
};
exports.generateRefreshToken = generateRefreshToken;
//REFRESH TOKEN
const refreshToken = (req, res, next) => {
    const token = req.cookies["refresh_token"];
    if (!token) {
        return res.status(403).json({ message: "NOT AUTHORIZED!" });
    }
    else {
        try {
            const user = jsonwebtoken_1.default.verify(token, REFRESH_TOKEN_SECRET);
            if (!user) {
                return res.status(403).json({ message: "INVALID TOKEN!" });
            }
            else {
                const accessToken = (0, exports.generateToken)({
                    user_id: user.user_id,
                    email: user.email,
                });
                res.cookie("access_token", accessToken);
                const refreshToken = (0, exports.generateRefreshToken)({
                    user_id: user.user_id,
                    email: user.email,
                });
                res.cookie("refresh_token", refreshToken);
                res.status(200).json({ message: "TOKEN REFRESHED!" });
            }
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
exports.refreshToken = refreshToken;
