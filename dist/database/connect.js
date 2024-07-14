"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
const connectToDatabase = () => {
    const URI = process.env.MONGO_URI;
    try {
        if (URI !== undefined) {
            const connect = mongoose_1.default.connect(URI);
            connect.then(() => console.log("CONNECTED TO DATABASE!"));
        }
        else {
            console.log("URI IS UNDEFINED!");
            console.log(URI);
        }
    }
    catch (error) {
        console.log("error", error);
        process.exit(1);
    }
};
exports.default = connectToDatabase;
