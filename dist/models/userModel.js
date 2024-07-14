"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["PROCESSOR", "APPRAISER"],
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
