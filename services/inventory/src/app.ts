import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Inventory } from "./model/inventory";

const mongoUrl = process.env.MONGO_URL as string;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();
const port = 4000;
app.use(express.json());

app.get("/inventory", async (_: Request, res: Response) => {
  res.json(await Inventory.find());
});

app.get("/inventory/:sku", async (req: Request, res: Response) => {
  res.json(await Inventory.find({ sku: req.params.sku }));
});

app.listen(port, () => {
  console.log(`Inventory service is running at http://localhost:${port}`);
});
