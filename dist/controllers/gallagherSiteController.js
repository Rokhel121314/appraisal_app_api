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
exports.viewGallagherSiteOfEntity = exports.deleteGallagherSite = exports.addManyGallagherSite = exports.updateGallagherSite = exports.addGallagherSite = void 0;
const siteModel_1 = __importDefault(require("../models/siteModel"));
// ADD SITE
const addGallagherSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const payload = req.body;
    try {
        const site = yield siteModel_1.default.create(payload);
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
                valuation_name: (_a = site.other_valuation_1) === null || _a === void 0 ? void 0 : _a.valuation_name,
                valuation_amount: (_b = site.other_valuation_1) === null || _b === void 0 ? void 0 : _b.valuation_amount,
            },
            other_valuation_2: {
                valuation_name: (_c = site.other_valuation_2) === null || _c === void 0 ? void 0 : _c.valuation_name,
                valuation_amount: (_d = site.other_valuation_2) === null || _d === void 0 ? void 0 : _d.valuation_amount,
            },
            writeup_image_file: {
                image_name: (_e = site.writeup_image_file) === null || _e === void 0 ? void 0 : _e.image_name,
                image_url: (_f = site.writeup_image_file) === null || _f === void 0 ? void 0 : _f.image_url,
            },
            image_file: {
                image_name: (_g = site.image_file) === null || _g === void 0 ? void 0 : _g.image_name,
                image_url: (_h = site.image_file) === null || _h === void 0 ? void 0 : _h.image_url,
            },
            bvs_file: {
                image_name: (_j = site.bvs_file) === null || _j === void 0 ? void 0 : _j.pdf_name,
                image_url: (_k = site.bvs_file) === null || _k === void 0 ? void 0 : _k.pdf_url,
            },
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
                    valuation_name: (_a = site.other_valuation_1) === null || _a === void 0 ? void 0 : _a.valuation_name,
                    valuation_amount: (_b = site.other_valuation_1) === null || _b === void 0 ? void 0 : _b.valuation_amount,
                },
                other_valuation_2: {
                    valuation_name: (_c = site.other_valuation_2) === null || _c === void 0 ? void 0 : _c.valuation_name,
                    valuation_amount: (_d = site.other_valuation_2) === null || _d === void 0 ? void 0 : _d.valuation_amount,
                },
                writeup_image_file: {
                    image_name: (_e = site.writeup_image_file) === null || _e === void 0 ? void 0 : _e.image_name,
                    image_url: (_f = site.writeup_image_file) === null || _f === void 0 ? void 0 : _f.image_url,
                },
                image_file: {
                    image_name: (_g = site.image_file) === null || _g === void 0 ? void 0 : _g.image_name,
                    image_url: (_h = site.image_file) === null || _h === void 0 ? void 0 : _h.image_url,
                },
                bvs_file: {
                    image_name: (_j = site.bvs_file) === null || _j === void 0 ? void 0 : _j.pdf_name,
                    image_url: (_k = site.bvs_file) === null || _k === void 0 ? void 0 : _k.pdf_url,
                },
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
                    valuation_name: (_a = site.other_valuation_1) === null || _a === void 0 ? void 0 : _a.valuation_name,
                    valuation_amount: (_b = site.other_valuation_1) === null || _b === void 0 ? void 0 : _b.valuation_amount,
                },
                other_valuation_2: {
                    valuation_name: (_c = site.other_valuation_2) === null || _c === void 0 ? void 0 : _c.valuation_name,
                    valuation_amount: (_d = site.other_valuation_2) === null || _d === void 0 ? void 0 : _d.valuation_amount,
                },
                writeup_image_file: {
                    image_name: (_e = site.writeup_image_file) === null || _e === void 0 ? void 0 : _e.image_name,
                    image_url: (_f = site.writeup_image_file) === null || _f === void 0 ? void 0 : _f.image_url,
                },
                image_file: {
                    image_name: (_g = site.image_file) === null || _g === void 0 ? void 0 : _g.image_name,
                    image_url: (_h = site.image_file) === null || _h === void 0 ? void 0 : _h.image_url,
                },
                bvs_file: {
                    image_name: (_j = site.bvs_file) === null || _j === void 0 ? void 0 : _j.pdf_name,
                    image_url: (_k = site.bvs_file) === null || _k === void 0 ? void 0 : _k.pdf_url,
                },
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
// VIEW ALL SITES
const viewGallagherSiteOfEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { entity_id } = req.params;
    try {
        const sites = yield siteModel_1.default.find({ entity_id: entity_id });
        if (!sites) {
            res.status(404).json({ message: "NO SITES FOUND!" });
        }
        else {
            const filtered_sites_list = sites.sort((a, b) => a.site_number > b.site_number ? 1 : -1);
            res.status(200).json(filtered_sites_list.map((site) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
                        valuation_name: (_a = site.other_valuation_1) === null || _a === void 0 ? void 0 : _a.valuation_name,
                        valuation_amount: (_b = site.other_valuation_1) === null || _b === void 0 ? void 0 : _b.valuation_amount,
                    },
                    other_valuation_2: {
                        valuation_name: (_c = site.other_valuation_2) === null || _c === void 0 ? void 0 : _c.valuation_name,
                        valuation_amount: (_d = site.other_valuation_2) === null || _d === void 0 ? void 0 : _d.valuation_amount,
                    },
                    writeup_image_file: {
                        image_name: (_e = site.writeup_image_file) === null || _e === void 0 ? void 0 : _e.image_name,
                        image_url: (_f = site.writeup_image_file) === null || _f === void 0 ? void 0 : _f.image_url,
                    },
                    image_file: {
                        image_name: (_g = site.image_file) === null || _g === void 0 ? void 0 : _g.image_name,
                        image_url: (_h = site.image_file) === null || _h === void 0 ? void 0 : _h.image_url,
                    },
                    bvs_file: {
                        image_name: (_j = site.bvs_file) === null || _j === void 0 ? void 0 : _j.pdf_name,
                        image_url: (_k = site.bvs_file) === null || _k === void 0 ? void 0 : _k.pdf_url,
                    },
                    entity_id: site.entity_id,
                    date_created: site.createdAt,
                    date_updated: site.updatedAt,
                    site_id: site._id,
                };
            }));
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.viewGallagherSiteOfEntity = viewGallagherSiteOfEntity;
