"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const gallagherEntitySchema = new mongoose_1.default.Schema({
    entity: {
        type: String,
        required: true,
    },
    entity_number: {
        type: String,
        required: true,
    },
    entity_address: {
        type: String,
        required: true,
    },
});
