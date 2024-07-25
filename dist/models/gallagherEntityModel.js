"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const gallagherEntitySchema = new mongoose_1.default.Schema({
    entity_name: {
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
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    effective_date: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        default: "Gallagher",
    },
    appraiser: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const GallagherEntity = mongoose_1.default.model("gallagherEntity", gallagherEntitySchema);
exports.default = GallagherEntity;
