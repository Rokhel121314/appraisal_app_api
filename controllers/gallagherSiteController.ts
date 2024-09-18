import GallagherSite from "../models/siteModel";
import { Request, Response } from "express";
import { GallagherSiteType } from "./controllerTypes";

// ADD SITE

export const addGallagherSite = async (req: Request, res: Response) => {
  const payload: GallagherSiteType = req.body;

  try {
    const site = await GallagherSite.create(payload);
    res.status(200).json({
      site_number: site.site_number,
      site_name: site.site_name,
      site_address: site.site_address,
      city: site.city,
      state: site.state,
      zip: site.zip,
      building_number: site.building_number,
      building_name: site.building_name,
      building_address: site.building_address,
      latitude: site.latitude,
      longitude: site.longitude,
      sov_rcn: site.sov_rcn,
      sov_construction_class: site.sov_construction_class,
      sov_area: site.sov_area,
      inspection_date: site.inspection_date,
      year_built: site.year_built,
      building_use: site.building_use,
      stories: site.stories,
      average_height: site.average_height,
      area_main: site.area_main,
      area_basement: site.area_basement,
      area_total: site.area_total,
      frame_type: site.frame_type,
      iso_class: site.iso_class,
      structural_floor_frame: site.structural_floor_frame,
      foundation_type: site.foundation_type,
      building_service_system: site.building_service_system,
      roof_cover_material: site.roof_cover_material,
      roof_frame: site.roof_frame,
      roof_age: site.roof_age,
      roof_geometry: site.roof_geometry,
      exterior_walltype_1: site.exterior_walltype_1,
      exterior_walltype_2: site.exterior_walltype_2,
      exterior_walltype_3: site.exterior_walltype_3,
      partition_wall_structure: site.partition_wall_structure,
      partition_wall_finish: site.partition_wall_finish,
      floor_finish: site.floor_finish,
      ceiling_finish: site.ceiling_finish,
      fire_sprinklers: site.fire_sprinklers,
      firealarms_manual: site.firealarms_manual,
      firealarms_automatic: site.firealarms_automatic,
      smoke_detector: site.smoke_detector,
      fire_extinguishers: site.fire_extinguishers,
      emergency_exit_lights: site.emergency_exit_lights,
      additional_features: site.additional_features,
      cost_new: site.cost_new,
      cost_new_less_exclusions: site.cost_new_less_exclusions,
      exclusions: site.exclusions,
      rcn_per_area: site.rcn_per_area,
      bvs_type: site.bvs_type,

      other_valuation_1: {
        valuation_name: site.other_valuation_1?.valuation_name,
        valuation_amount: site.other_valuation_1?.valuation_amount,
      },
      other_valuation_2: {
        valuation_name: site.other_valuation_2?.valuation_name,
        valuation_amount: site.other_valuation_2?.valuation_amount,
      },

      writeup_image_file: {
        image_name: site.writeup_image_file?.image_name,
        image_url: site.writeup_image_file?.image_url,
      },
      image_file: {
        image_name: site.image_file?.image_name,
        image_url: site.image_file?.image_url,
      },
      bvs_file: {
        image_name: site.bvs_file?.pdf_name,
        image_url: site.bvs_file?.pdf_url,
      },

      entity_id: site.entity_id,
      date_created: site.createdAt,
      date_updated: site.updatedAt,
      site_id: site._id,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE SITE

export const updateGallagherSite = async (req: Request, res: Response) => {
  const { site_id } = req.params;
  const payload: GallagherSiteType = req.body;

  try {
    const site = await GallagherSite.findByIdAndUpdate(
      {
        _id: site_id,
      },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!site) {
      res.status(404).json({ message: "FAILED TO UPDATE" });
    } else {
      res.status(200).json({
        site_number: site.site_number,
        site_name: site.site_name,
        site_address: site.site_address,
        city: site.city,
        state: site.state,
        zip: site.zip,
        building_number: site.building_number,
        building_name: site.building_name,
        building_address: site.building_address,
        latitude: site.latitude,
        longitude: site.longitude,
        sov_rcn: site.sov_rcn,
        sov_construction_class: site.sov_construction_class,
        sov_area: site.sov_area,
        inspection_date: site.inspection_date,
        year_built: site.year_built,
        building_use: site.building_use,
        stories: site.stories,
        average_height: site.average_height,
        area_main: site.area_main,
        area_basement: site.area_basement,
        area_total: site.area_total,
        frame_type: site.frame_type,
        iso_class: site.iso_class,
        structural_floor_frame: site.structural_floor_frame,
        foundation_type: site.foundation_type,
        building_service_system: site.building_service_system,
        roof_cover_material: site.roof_cover_material,
        roof_frame: site.roof_frame,
        roof_age: site.roof_age,
        roof_geometry: site.roof_geometry,
        exterior_walltype_1: site.exterior_walltype_1,
        exterior_walltype_2: site.exterior_walltype_2,
        exterior_walltype_3: site.exterior_walltype_3,
        partition_wall_structure: site.partition_wall_structure,
        partition_wall_finish: site.partition_wall_finish,
        floor_finish: site.floor_finish,
        ceiling_finish: site.ceiling_finish,
        fire_sprinklers: site.fire_sprinklers,
        firealarms_manual: site.firealarms_manual,
        firealarms_automatic: site.firealarms_automatic,
        smoke_detector: site.smoke_detector,
        fire_extinguishers: site.fire_extinguishers,
        emergency_exit_lights: site.emergency_exit_lights,
        additional_features: site.additional_features,
        cost_new: site.cost_new,
        cost_new_less_exclusions: site.cost_new_less_exclusions,
        exclusions: site.exclusions,
        rcn_per_area: site.rcn_per_area,
        bvs_type: site.bvs_type,

        other_valuation_1: {
          valuation_name: site.other_valuation_1?.valuation_name,
          valuation_amount: site.other_valuation_1?.valuation_amount,
        },
        other_valuation_2: {
          valuation_name: site.other_valuation_2?.valuation_name,
          valuation_amount: site.other_valuation_2?.valuation_amount,
        },

        writeup_image_file: {
          image_name: site.writeup_image_file?.image_name,
          image_url: site.writeup_image_file?.image_url,
        },
        image_file: {
          image_name: site.image_file?.image_name,
          image_url: site.image_file?.image_url,
        },
        bvs_file: {
          image_name: site.bvs_file?.pdf_name,
          image_url: site.bvs_file?.pdf_url,
        },
        entity_id: site.entity_id,
        date_created: site.createdAt,
        date_updated: site.updatedAt,
        site_id: site._id,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ADD MULTIPLE SITE

export const addManyGallagherSite = async (req: Request, res: Response) => {
  const payload: GallagherSiteType[] = req.body;

  try {
    const manySites = await GallagherSite.insertMany(payload);
    res.status(200).json(
      manySites.map((site) => {
        return {
          site_number: site.site_number,
          site_name: site.site_name,
          site_address: site.site_address,
          city: site.city,
          state: site.state,
          zip: site.zip,
          building_number: site.building_number,
          building_name: site.building_name,
          building_address: site.building_address,
          latitude: site.latitude,
          longitude: site.longitude,
          sov_rcn: site.sov_rcn,
          sov_construction_class: site.sov_construction_class,
          sov_area: site.sov_area,
          inspection_date: site.inspection_date,
          year_built: site.year_built,
          building_use: site.building_use,
          stories: site.stories,
          average_height: site.average_height,
          area_main: site.area_main,
          area_basement: site.area_basement,
          area_total: site.area_total,
          frame_type: site.frame_type,
          iso_class: site.iso_class,
          structural_floor_frame: site.structural_floor_frame,
          foundation_type: site.foundation_type,
          building_service_system: site.building_service_system,
          roof_cover_material: site.roof_cover_material,
          roof_frame: site.roof_frame,
          roof_age: site.roof_age,
          roof_geometry: site.roof_geometry,
          exterior_walltype_1: site.exterior_walltype_1,
          exterior_walltype_2: site.exterior_walltype_2,
          exterior_walltype_3: site.exterior_walltype_3,
          partition_wall_structure: site.partition_wall_structure,
          partition_wall_finish: site.partition_wall_finish,
          floor_finish: site.floor_finish,
          ceiling_finish: site.ceiling_finish,
          fire_sprinklers: site.fire_sprinklers,
          firealarms_manual: site.firealarms_manual,
          firealarms_automatic: site.firealarms_automatic,
          smoke_detector: site.smoke_detector,
          fire_extinguishers: site.fire_extinguishers,
          emergency_exit_lights: site.emergency_exit_lights,
          additional_features: site.additional_features,
          cost_new: site.cost_new,
          cost_new_less_exclusions: site.cost_new_less_exclusions,
          exclusions: site.exclusions,
          rcn_per_area: site.rcn_per_area,
          bvs_type: site.bvs_type,

          other_valuation_1: {
            valuation_name: site.other_valuation_1?.valuation_name,
            valuation_amount: site.other_valuation_1?.valuation_amount,
          },
          other_valuation_2: {
            valuation_name: site.other_valuation_2?.valuation_name,
            valuation_amount: site.other_valuation_2?.valuation_amount,
          },

          writeup_image_file: {
            image_name: site.writeup_image_file?.image_name,
            image_url: site.writeup_image_file?.image_url,
          },
          image_file: {
            image_name: site.image_file?.image_name,
            image_url: site.image_file?.image_url,
          },
          bvs_file: {
            image_name: site.bvs_file?.pdf_name,
            image_url: site.bvs_file?.pdf_url,
          },
          entity_id: site.entity_id,
          date_created: site.createdAt,
          date_updated: site.updatedAt,
          site_id: site._id,
        };
      })
    );
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE SITE

export const deleteGallagherSite = async (req: Request, res: Response) => {
  const { site_id } = req.params;
  try {
    const site = await GallagherSite.findByIdAndDelete({ _id: site_id });
    if (!site) {
      res.status(404).json({ message: "SITE NOT FOUND!" });
    } else {
      res.status(200).json({
        message: `${site.site_number} - ${site.site_name} IS SUCCESSFULLY DELETED!`,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// VIEW ALL SITES

export const viewGallagherSiteOfEntity = async (
  req: Request,
  res: Response
) => {
  const { entity_id } = req.params;

  try {
    const sites = await GallagherSite.find({ entity_id: entity_id });
    if (!sites) {
      res.status(404).json({ message: "NO SITES FOUND!" });
    } else {
      const filtered_sites_list = sites.sort((a, b) =>
        a.site_number > b.site_number ? 1 : -1
      );

      res.status(200).json(
        filtered_sites_list.map((site) => {
          return {
            site_number: site.site_number,
            site_name: site.site_name,
            site_address: site.site_address,
            city: site.city,
            state: site.state,
            zip: site.zip,
            building_number: site.building_number,
            building_name: site.building_name,
            building_address: site.building_address,
            latitude: site.latitude,
            longitude: site.longitude,
            sov_rcn: site.sov_rcn,
            sov_construction_class: site.sov_construction_class,
            sov_area: site.sov_area,
            inspection_date: site.inspection_date,
            year_built: site.year_built,
            building_use: site.building_use,
            stories: site.stories,
            average_height: site.average_height,
            area_main: site.area_main,
            area_basement: site.area_basement,
            area_total: site.area_total,
            frame_type: site.frame_type,
            iso_class: site.iso_class,
            structural_floor_frame: site.structural_floor_frame,
            foundation_type: site.foundation_type,
            building_service_system: site.building_service_system,
            roof_cover_material: site.roof_cover_material,
            roof_frame: site.roof_frame,
            roof_age: site.roof_age,
            roof_geometry: site.roof_geometry,
            exterior_walltype_1: site.exterior_walltype_1,
            exterior_walltype_2: site.exterior_walltype_2,
            exterior_walltype_3: site.exterior_walltype_3,
            partition_wall_structure: site.partition_wall_structure,
            partition_wall_finish: site.partition_wall_finish,
            floor_finish: site.floor_finish,
            ceiling_finish: site.ceiling_finish,
            fire_sprinklers: site.fire_sprinklers,
            firealarms_manual: site.firealarms_manual,
            firealarms_automatic: site.firealarms_automatic,
            smoke_detector: site.smoke_detector,
            fire_extinguishers: site.fire_extinguishers,
            emergency_exit_lights: site.emergency_exit_lights,
            additional_features: site.additional_features,
            cost_new: site.cost_new,
            cost_new_less_exclusions: site.cost_new_less_exclusions,
            exclusions: site.exclusions,
            rcn_per_area: site.rcn_per_area,
            bvs_type: site.bvs_type,

            other_valuation_1: {
              valuation_name: site.other_valuation_1?.valuation_name,
              valuation_amount: site.other_valuation_1?.valuation_amount,
            },
            other_valuation_2: {
              valuation_name: site.other_valuation_2?.valuation_name,
              valuation_amount: site.other_valuation_2?.valuation_amount,
            },

            writeup_image_file: {
              image_name: site.writeup_image_file?.image_name,
              image_url: site.writeup_image_file?.image_url,
            },
            image_file: {
              image_name: site.image_file?.image_name,
              image_url: site.image_file?.image_url,
            },
            bvs_file: {
              image_name: site.bvs_file?.pdf_name,
              image_url: site.bvs_file?.pdf_url,
            },
            entity_id: site.entity_id,
            date_created: site.createdAt,
            date_updated: site.updatedAt,
            site_id: site._id,
          };
        })
      );
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
