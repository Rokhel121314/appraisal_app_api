"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallagherEntityController_1 = require("../controllers/gallagherEntityController");
const jwt_1 = require("../jwt/jwt");
const gallagherEntityRouter = express_1.default.Router();
// ADD ENTITY
gallagherEntityRouter.post("/gallagher_entity", jwt_1.validateToken, gallagherEntityController_1.addGallagherEntity);
// UPDATE ENTITY
gallagherEntityRouter.put("/gallagher_entity/update/:entity_id", jwt_1.validateToken, gallagherEntityController_1.updateGallagherEntity);
// DELETE ENTITY
gallagherEntityRouter.delete("/gallagher_entity/delete/:entity_id", jwt_1.validateToken, gallagherEntityController_1.deleteGallagherEntity);
// VIEW ALL ENTITY
gallagherEntityRouter.get("/gallagher_entity/viewall", jwt_1.validateToken, gallagherEntityController_1.viewGallagherEntity);
exports.default = gallagherEntityRouter;
