import express, { Request, Response } from "express";
import mongoose from "mongoose";
import {fetchCatalog} from "./services/catalog";

const mongoUrl = process.env.MONGO_URL as string;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();
const port = 3000;
app.use(express.json());

app.get("/catalog", async (_: Request, res: Response) => {
  res.json(await fetchCatalog());
});

app.listen(port, () => {
  console.log(`Catalog service is running at http://localhost:${port}`);
});
