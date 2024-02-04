import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    zonal: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    totalStudent: {
      type: String,
      require: true,
    },
    totalTeacher: {
      type: String,
      require: true,
    },
    stream: {
      type: Array,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    imageUrls: {
      type: Array,
      require: true,
    },
    useRef: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Shcool = mongoose.model("School", schoolSchema);
export default Shcool;
