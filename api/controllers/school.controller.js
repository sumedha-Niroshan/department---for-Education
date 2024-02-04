import School from "../models/school.model.js";

export const createSchool = async (req, res, next) => {
  try {
    const school = await School.create(req.body);
    return res.status(201).json(school);
  } catch (error) {
    next(error);
  }
};
