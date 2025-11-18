import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Load contributions from data.json
const raw = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf8"));

// Group contributions by year
const contributions = {};
raw.forEach(entry => {
  const year = entry.date.split("-")[0];
  if (!contributions[year]) contributions[year] = [];
  contributions[year].push(entry);
});

// Load activity.json (fixed)
const activity = JSON.parse(
  fs.readFileSync(path.join(__dirname, "activity.json"), "utf8")
);

// API: return year-wise contributions
app.get("/api/contributions", (req, res) => {
  res.json(contributions);
});

// API: return activity for selected year
app.get("/api/activity/:year", (req, res) => {
  const year = req.params.year;
  res.json(activity[year] || {});
});

// API: user profile
app.get("/api/user", (req, res) => {
  const file = path.join(__dirname, "user.json");
  const raw = fs.readFileSync(file, "utf-8");
  res.json(JSON.parse(raw));
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
