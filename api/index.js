import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.router.js'

dotenv.config();

const app = express();
app.use(express.json())

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

app.use('/test',userRouter)
app.use('/api/auth', authRouter)


