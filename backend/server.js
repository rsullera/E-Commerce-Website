import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Enable CORS for frontend port 5174
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/users", authRoutes);

// Connect to DB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
