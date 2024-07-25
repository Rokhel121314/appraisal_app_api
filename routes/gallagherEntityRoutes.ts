import express from "express";
import {
  addGallagherEntity,
  deleteGallagherEntity,
  updateGallagherEntity,
  viewGallagherEntity,
} from "../controllers/gallagherEntityController";
import { validateToken } from "../jwt/jwt";

const gallagherEntityRouter = express.Router();

// ADD ENTITY
gallagherEntityRouter.post(
  "/gallagher_entity",
  validateToken,
  addGallagherEntity
);

// UPDATE ENTITY
gallagherEntityRouter.put(
  "/gallagher_entity/update/:entity_id",
  validateToken,
  updateGallagherEntity
);

// DELETE ENTITY
gallagherEntityRouter.delete(
  "/gallagher_entity/delete/:entity_id",
  validateToken,
  deleteGallagherEntity
);

// VIEW ALL ENTITY
gallagherEntityRouter.get(
  "/gallagher_entity/viewall",
  validateToken,
  viewGallagherEntity
);
export default gallagherEntityRouter;
