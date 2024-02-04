import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    zonal: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    totalStudent: {
      type: String,
      required: true,
    },
    totalTeacher: {
      type: String,
      required: true,
    },
    maths: {
      type: Boolean,
      required: true,
    },
    bio: {
      type: Boolean,
      required: true,
    },
    commerce: {
      type: Boolean,
      required: true,
    },
    art: {
      type: Boolean,
      required: true,
    },
    tech: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Shcool = mongoose.model("School", schoolSchema);
export default Shcool;
