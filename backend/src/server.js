import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
