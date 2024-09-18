import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const gallagherSiteSchema = new mongoose.Schema(
  {
    site_number: {
      type: String,
      required: true,
    },
    site_name: {
      type: String,
      required: true,
    },
    site_address: {
      type: String,
      required: false,
      default: "",
    },
    city: {
      type: String,
      required: false,
      default: "",
    },
    state: {
      type: String,
      required: false,
      default: "",
    },
    zip: {
      type: String,
      required: false,
      default: "",
    },
    building_number: {
      type: String,
      required: false,
      default: "",
    },
    building_name: {
      type: String,
      required: false,
      default: "",
    },
    building_address: {
      type: String,
      required: false,
      default: "",
    },
    latitude: {
      type: String,
      required: false,
      default: "",
    },
    longitude: {
      type: String,
      required: false,
      default: "",
    },
    sov_rcn: {
      type: Number,
      required: false,
      default: 0,
    },
    sov_construction_class: {
      type: String,
      required: false,
      default: "",
    },
    sov_area: {
      type: Number,
      required: false,
      default: 0,
    },
    inspection_date: {
      type: String,
      required: false,
      default: "",
    },

    year_built: {
      type: String,
      required: false,
      default: "",
    },
    building_use: {
      type: String,
      required: false,
      default: "",
    },
    stories: {
      type: String,
      required: false,
      default: 0,
    },
    average_height: {
      type: Number,
      required: false,
      default: 0,
    },
    area_main: {
      type: Number,
      required: false,
      default: 0,
    },
    area_basement: {
      type: Number,
      required: false,
      default: 0,
    },
    area_total: {
      type: Number,
      required: false,
      default: 0,
    },
    frame_type: {
      type: String,
      required: false,
      default: "",
    },
    iso_class: {
      type: String,
      required: false,
      default: "",
    },
    structural_floor_frame: {
      type: String,
      required: false,
      default: "",
    },
    foundation_type: {
      type: String,
      required: false,
      default: "",
    },

    building_service_system: {
      type: String,
      required: false,
      default: "",
    },
    roof_cover_material: {
      type: String,
      required: false,
      default: "",
    },
    roof_frame: {
      type: String,
      required: false,
      default: "",
    },
    roof_age: {
      type: String,
      required: false,
      default: "",
    },

    roof_geometry: {
      type: String,
      required: false,
      default: "",
    },
    exterior_walltype_1: {
      type: String,
      required: false,
      default: "",
    },
    exterior_walltype_2: {
      type: String,
      required: false,
      default: "",
    },
    exterior_walltype_3: {
      type: String,
      required: false,
      default: "",
    },

    partition_wall_structure: {
      type: String,
      required: false,
      default: "",
    },

    partition_wall_finish: {
      type: String,
      required: false,
      default: "",
    },

    floor_finish: {
      type: String,
      required: false,
      default: "",
    },

    ceiling_finish: {
      type: String,
      required: false,
      default: "",
    },
    fire_sprinklers: {
      type: String,
      required: false,
    },
    firealarms_manual: {
      type: String,
      required: false,
    },
    firealarms_automatic: {
      type: String,
      required: false,
    },

    smoke_detector: {
      type: String,
      required: false,
    },
    fire_extinguishers: {
      type: String,
      required: false,
    },
    emergency_exit_lights: {
      type: String,
      required: false,
    },
    additional_features: {
      type: String,
      required: false,
    },
    cost_new: {
      type: Number,
      required: false,
    },
    cost_new_less_exclusions: {
      type: Number,
      required: false,
      default: 0,
    },
    exclusions: {
      type: Number,
      required: false,
      default: 0,
    },
    other_valuation_1: {
      valuation_name: {
        type: String,
        required: false,
        default: "",
      },
      valuation_amount: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    other_valuation_2: {
      valuation_name: {
        type: String,
        required: false,
        default: "",
      },
      valuation_amount: {
        type: Number,
        required: false,
        default: 0,
      },
    },

    rcn_per_area: {
      type: Number,
      required: false,
      default: 0,
    },
    bvs_type: {
      type: String,
      required: false,
      enum: ["Reconstruction", "Replacement"],
    },
    writeup_image_file: {
      image_name: {
        type: String,
        required: false,
        default: "",
      },
      image_url: {
        type: String,
        required: false,
        default: "",
      },
    },
    bvs_file: {
      pdf_name: {
        type: String,
        required: false,
        default: "",
      },
      pdf_url: {
        type: String,
        required: false,
        default: "",
      },
    },
    image_file: {
      image_name: {
        type: String,
        required: false,
        default: "",
      },
      image_url: {
        type: String,
        required: false,
        default: "",
      },
    },

    entity_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GallagherSite = mongoose.model("gallagherSite", gallagherSiteSchema);
export default GallagherSite;
