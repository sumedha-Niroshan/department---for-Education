import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../Utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword, role });
  try {
    await newUser.save();
    res.status(201).json("User created succesfully");
  } catch (error) {
    next(errorHandler(550, "erroe from the function"));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password, role } = req.body;

  try {
    let validUser;

    if (role === 'admin') {
      validUser = await User.findOne({ email, role: 'admin' });
      if (!validUser) {
        return next(errorHandler(404, 'Admin not found'));
      }
    } else if (role === 'user') {
      validUser = await User.findOne({ email, role: 'user' });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
    } else {
      return next(errorHandler(400, 'Invalid role'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credentials!'));
    }

    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);

   
    const { password: pass, ...rest } = validUser._doc;

    
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);

  } catch (error) {
    next(error);
  }
};
