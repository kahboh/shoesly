const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

app.get("/projects", (req, res) => {
  res.json([
    { id: 1, title: "Modern Living Room", style: "Modern" },
    { id: 2, title: "Minimalist Office", style: "Minimalist" }
  ]);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});