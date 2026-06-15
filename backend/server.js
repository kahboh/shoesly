const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/projects", async (req, res) => {
  const result = await pool.query("SELECT * FROM projects");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});