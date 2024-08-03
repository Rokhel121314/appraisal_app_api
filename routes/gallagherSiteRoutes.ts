import express from "express";
import {
  addGallagherSite,
  addManyGallagherSite,
  deleteGallagherSite,
  updateGallagherSite,
  viewGallagherSiteOfEntity,
} from "../controllers/gallagherSiteController";
import { validateToken } from "../jwt/jwt";

const gallagherSiteRouter = express.Router();

// ADD SITE

gallagherSiteRouter.post(
  "/gallagher_site/add",
  validateToken,
  addGallagherSite
);

// UPDATE ENTITY

gallagherSiteRouter.put(
  "/gallagher_site/update/:site_id",
  validateToken,
  updateGallagherSite
);

// DELETE SITE

gallagherSiteRouter.delete(
  "/gallagher_site/delete/:site_id",
  validateToken,
  deleteGallagherSite
);

// ADD MANY SITES

gallagherSiteRouter.post(
  "/gallagher_site/add_many",
  validateToken,
  addManyGallagherSite
);

// VIEW ALL SITES OF ENTITY
gallagherSiteRouter.get(
  "/gallagher_site/view_entity_sites/:entity_id",
  validateToken,
  viewGallagherSiteOfEntity
);

export default gallagherSiteRouter;
