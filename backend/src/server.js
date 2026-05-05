import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
