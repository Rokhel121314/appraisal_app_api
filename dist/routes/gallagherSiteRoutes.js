"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallaggherSiteController_1 = require("../controllers/gallaggherSiteController");
const jwt_1 = require("../jwt/jwt");
const gallagherSiteRouter = express_1.default.Router();
// ADD SITE
gallagherSiteRouter.post("/gallagher_site/add", jwt_1.validateToken, gallaggherSiteController_1.addGallagherSite);
// UPDATE ENTITY
gallagherSiteRouter.put("/gallagher_site/update/:site_id", jwt_1.validateToken, gallaggherSiteController_1.updateGallagherSite);
exports.default = gallagherSiteRouter;
