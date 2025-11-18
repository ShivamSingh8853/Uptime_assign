import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());

// Load raw JSON as an array
const raw = JSON.parse(fs.readFileSync("./data.json", "utf8"));

// Group data by year
const contributions = {};

raw.forEach(entry => {
  const year = entry.date.split("-")[0];
  if (!contributions[year]) contributions[year] = [];
  contributions[year].push(entry);
});

// API endpoint
app.get("/api/contributions", (req, res) => {
  res.json(contributions);
});

app.get("/api/user", (req, res) => {
    const file = path.join(__dirname, "./user.json");
    const raw = fs.readFileSync(file, "utf-8");
    res.json(JSON.parse(raw));
  });

// Run server
app.listen(5000, () => console.log("Server running on port 5000"));
