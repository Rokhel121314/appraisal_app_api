import express from "express";
import {
  addGallagherSite,
  updateGallagherSite,
} from "../controllers/gallaggherSiteController";
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

export default gallagherSiteRouter;
