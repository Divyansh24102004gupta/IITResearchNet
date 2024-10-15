import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: true,
    unique: true,
  },
});

export const College = mongoose.model("College", collegeSchema);
