import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const gallagherEntitySchema = new mongoose.Schema(
  {
    entity_name: {
      type: String,
      required: true,
    },
    entity_number: {
      type: String,
      required: true,
    },
    entity_address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    effective_date: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      default: "Gallagher",
    },
    appraiser: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GallagherEntity = mongoose.model(
  "gallagherEntity",
  gallagherEntitySchema
);

export default GallagherEntity;
