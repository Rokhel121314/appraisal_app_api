"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallagherSiteController_1 = require("../controllers/gallagherSiteController");
const jwt_1 = require("../jwt/jwt");
const gallagherSiteRouter = express_1.default.Router();
// ADD SITE
gallagherSiteRouter.post("/gallagher_site/add", jwt_1.validateToken, gallagherSiteController_1.addGallagherSite);
// UPDATE ENTITY
gallagherSiteRouter.put("/gallagher_site/update/:site_id", jwt_1.validateToken, gallagherSiteController_1.updateGallagherSite);
// DELETE SITE
gallagherSiteRouter.delete("/gallagher_site/delete/:site_id", jwt_1.validateToken, gallagherSiteController_1.deleteGallagherSite);
// ADD MANY SITES
gallagherSiteRouter.post("/gallagher_site/add_many", jwt_1.validateToken, gallagherSiteController_1.addManyGallagherSite);
// VIEW ALL SITES OF ENTITY
gallagherSiteRouter.get("/gallagher_site/view_entity_sites/:entity_id", jwt_1.validateToken, gallagherSiteController_1.viewGallagherSiteOfEntity);
exports.default = gallagherSiteRouter;
