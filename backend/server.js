import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// ✅ Fixed async route
app.get("/api/categories", async (req, res) => {
  try {
    const data = await (await fetch("https://taxi-kitchen-api.vercel.app/api/v1/categories")).json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
