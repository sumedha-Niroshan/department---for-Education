import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connect to the mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running on port 3000");
});


