import express from "express";
import { createSchool } from "../controllers/school.controller.js";
import { verifyUser } from "../Utils/verifyUser.js";

const route = express.Router();

route.post("/create", verifyUser, createSchool);

export default route;
