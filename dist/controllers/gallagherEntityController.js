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
exports.viewGallagherEntity = exports.deleteGallagherEntity = exports.updateGallagherEntity = exports.addGallagherEntity = void 0;
const gallagherEntityModel_1 = __importDefault(require("../models/gallagherEntityModel"));
// ADD ENTITY
const addGallagherEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const entity = yield gallagherEntityModel_1.default.create(payload);
        res.status(200).json({
            entity_name: entity.entity_name,
            entity_number: entity.entity_number,
            entity_address: entity.entity_address,
            city: entity.city,
            state: entity.state,
            zip: entity.zip,
            effective_date: entity.effective_date,
            appraiser: entity.appraiser,
            entity_id: entity._id,
            date_created: entity.createdAt,
            date_updated: entity.updatedAt,
            client: entity.client,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addGallagherEntity = addGallagherEntity;
// UPDATE ENTITY
const updateGallagherEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { entity_id } = req.params;
    const payload = req.body;
    try {
        const entity = yield gallagherEntityModel_1.default.findByIdAndUpdate({
            _id: entity_id,
        }, payload, { new: true, runValidators: true });
        if (!entity) {
            res.status(404).json({ message: "FAILED TO UPDATE!" });
        }
        else {
            res.status(200).json({
                entity_name: entity.entity_name,
                entity_number: entity.entity_number,
                entity_address: entity.entity_address,
                city: entity.city,
                state: entity.state,
                zip: entity.zip,
                effective_date: entity.effective_date,
                appraiser: entity.appraiser,
                entity_id: entity._id,
                date_created: entity.createdAt,
                date_updated: entity.updatedAt,
                client: entity.client,
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateGallagherEntity = updateGallagherEntity;
// DELETE ENTITY
const deleteGallagherEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { entity_id } = req.params;
    try {
        const entity = yield gallagherEntityModel_1.default.findByIdAndDelete({ _id: entity_id });
        if (!entity) {
            res.status(404).json({ message: "ENTITY NOT FOUND!" });
        }
        else {
            res.status(200).json({
                message: `${entity.entity_name.toUpperCase()} IS SUCCESSFULLY DELETED!`,
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteGallagherEntity = deleteGallagherEntity;
// VIEW ALL ENTITY
const viewGallagherEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entity = yield gallagherEntityModel_1.default.find({});
        if (!entity) {
            res.status(404).json({ message: "NO ENTITIES FOUND!" });
        }
        else {
            const entityArray = entity.map((item) => ({
                entity_name: item.entity_name,
                entity_number: item.entity_number,
                entity_address: item.entity_address,
                city: item.city,
                state: item.state,
                zip: item.zip,
                effective_date: item.effective_date,
                appraiser: item.appraiser,
                entity_id: item._id,
                date_created: item.createdAt,
                date_updated: item.updatedAt,
                client: item.client,
            }));
            res.status(200).json(entityArray);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.viewGallagherEntity = viewGallagherEntity;
