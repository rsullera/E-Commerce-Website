import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/userRoutes.js"; // ✅ NEW
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ✅ Routes
app.use("/api/users", authRoutes); // login/register/me
app.use("/api/users", userRoutes); // CRUD: get, update, delete

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
