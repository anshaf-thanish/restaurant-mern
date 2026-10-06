import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { connectCloudinary } from "./config/cloudinary.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
connectDB();

connectCloudinary()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});