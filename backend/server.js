import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const PORT = process.env.PORT || 5002;
const PRODS = "/api/products"

const app = express();

app.use(express.json());

app.use(PRODS, productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
