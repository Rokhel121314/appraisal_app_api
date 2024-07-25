import GallagherEntity from "../models/gallagherEntityModel";
import { Request, Response } from "express";

export type GallagherEntityType = {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
};

// ADD ENTITY

export const addGallagherEntity = async (req: Request, res: Response) => {
  const payload: GallagherEntityType = req.body;

  try {
    const entity = await GallagherEntity.create(payload);
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
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE ENTITY

export const updateGallagherEntity = async (req: Request, res: Response) => {
  const { entity_id } = req.params;
  const payload: GallagherEntityType = req.body;

  try {
    const entity = await GallagherEntity.findByIdAndUpdate(
      {
        _id: entity_id,
      },
      payload,
      { new: true, runValidators: true }
    );
    if (!entity) {
      res.status(404).json({ message: "FAILED TO UPDATE!" });
    } else {
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
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE ENTITY

export const deleteGallagherEntity = async (req: Request, res: Response) => {
  const { entity_id } = req.params;
  try {
    const entity = await GallagherEntity.findByIdAndDelete({ _id: entity_id });
    if (!entity) {
      res.status(404).json({ message: "ENTITY NOT FOUND!" });
    } else {
      res.status(200).json({
        message: `${entity.entity_name.toUpperCase()} IS SUCCESSFULLY DELETED!`,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// VIEW ALL ENTITY

export const viewGallagherEntity = async (req: Request, res: Response) => {
  try {
    const entity = await GallagherEntity.find({});
    if (!entity) {
      res.status(404).json({ message: "NO ENTITIES FOUND!" });
    } else {
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
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
