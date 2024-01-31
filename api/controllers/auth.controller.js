import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../Utils/error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("User created succesfully");
  } catch (error) {
    next(errorHandler(550, "erroe from the function"));
  }
};
