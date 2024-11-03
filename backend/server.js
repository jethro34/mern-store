import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = 5002;
const PRODS = "/products"

const app = express();

app.get(PRODS, (req, res) => {});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
