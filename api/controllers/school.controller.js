import { errorHandler } from "../Utils/error.js";
import School from "../models/school.model.js";

export const createSchool = async (req, res, next) => {
  try {
    const existingSchool = await School.find({ userRef: req.params.id });
    console.log(existingSchool);

    if (existingSchool) {
      return res
        .status(400)
        .json({ success: false, message: "You can Only create one listing" });
    }

    const school = await School.create(req.body);
    return res.status(201).json(school);
  } catch (error) {
    next(error);
  }
};
