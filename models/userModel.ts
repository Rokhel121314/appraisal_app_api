import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["PROCESSOR", "APPRAISER"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
export default User;
