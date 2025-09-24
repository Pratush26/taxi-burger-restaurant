import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

// Get all categories
app.get("/api/categories", async (req, res) => {
  try {
    const data = await (await fetch("https://taxi-kitchen-api.vercel.app/api/v1/categories")).json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single category by ID
app.get("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await (await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`)).json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

