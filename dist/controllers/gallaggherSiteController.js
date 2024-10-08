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
exports.deleteGallagherSite = exports.addManyGallagherSite = exports.updateGallagherSite = exports.addGallagherSite = void 0;
const siteModel_1 = __importDefault(require("../models/siteModel"));
// ADD SITE
const addGallagherSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const site = yield siteModel_1.default.create(payload);
        res.status(200).json({
            entity_site_building_number: site.entity_site_building_number,
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
            entity_id: site.entity_id,
            date_created: site.createdAt,
            date_updated: site.updatedAt,
            site_id: site._id,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addGallagherSite = addGallagherSite;
// UPDATE SITE
const updateGallagherSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { site_id } = req.params;
    const payload = req.body;
    try {
        const site = yield siteModel_1.default.findByIdAndUpdate({
            _id: site_id,
        }, payload, {
            new: true,
            runValidators: true,
        });
        if (!site) {
            res.status(404).json({ message: "FAILED TO UPDATE" });
        }
        else {
            res.status(200).json({
                entity_site_building_number: site.entity_site_building_number,
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
                entity_id: site.entity_id,
                date_created: site.createdAt,
                date_updated: site.updatedAt,
                site_id: site._id,
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateGallagherSite = updateGallagherSite;
// ADD MULTIPLE SITE
const addManyGallagherSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const manySites = yield siteModel_1.default.insertMany(payload);
        res.status(200).json(manySites.map((site) => {
            return {
                entity_site_building_number: site.entity_site_building_number,
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
                entity_id: site.entity_id,
                date_created: site.createdAt,
                date_updated: site.updatedAt,
                site_id: site._id,
            };
        }));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addManyGallagherSite = addManyGallagherSite;
// DELETE SITE
const deleteGallagherSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { site_id } = req.params;
    try {
        const site = yield siteModel_1.default.findByIdAndDelete({ _id: site_id });
        if (!site) {
            res.status(404).json({ message: "SITE NOT FOUND!" });
        }
        else {
            res.status(200).json({
                message: `${site.site_number} - ${site.site_name} IS SUCCESSFULLY DELETED!`,
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteGallagherSite = deleteGallagherSite;
