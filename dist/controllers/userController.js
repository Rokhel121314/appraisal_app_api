"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.loginUser = exports.addUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt = require("bcrypt");
// ADD USER
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userPayload = req.body;
    const hashPassword = bcrypt.hashSync(userPayload.password, 10);
    try {
        const exist = yield userModel_1.default.findOne({ email: userPayload.email }).exec();
        if (exist) {
            res.status(200).json({
                message: "EMAIL ALREADY IN USE!",
            });
        }
        else {
            const user = yield userModel_1.default.create(Object.assign(Object.assign({}, userPayload), { password: hashPassword }));
            res.status(200).json(user);
            console.log(`USER ${user.full_name} HAS SUCCESFULLY REGISTERED!`);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addUser = addUser;
// LOG IN USER
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log("email:", email, "password:", password);
    try {
        const user = yield userModel_1.default.findOne({ email: email }).exec();
        if (!user) {
            res.status(404).json({ message: "ENTERED WRONG EMAIL!" });
        }
        else {
            const checkPassword = yield bcrypt.compareSync(password, user.password);
            console.log("checkPassword", checkPassword);
            if (!checkPassword) {
                res.status(200).json({ message: "ENTERED WRONG PASSWORD!" });
            }
            else {
                res.status(200).json({
                    email: user.email,
                    role: user.role,
                    full_name: user.full_name,
                    user_id: user._id,
                });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
// CHANGE PASSWORD
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, new_password } = req.body;
    console.log("email", email, "new_password", new_password);
    const hashPassword = yield bcrypt.hashSync(new_password, 10);
    try {
        const exist = yield userModel_1.default.findOne({ email: email }).exec();
        if (!exist) {
            res.status(404).json({ message: "NO USER FOUND!" });
        }
        else {
            const user = yield userModel_1.default.updateOne({ email: email }, { $set: { password: hashPassword } });
            if (user.modifiedCount > 0) {
                res.status(200).json(user);
                console.log("PASSWORD UPDATED SUCCESSFULLY!");
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.changePassword = changePassword;
