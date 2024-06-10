import mongoose from "mongoose";
import {Catalog} from "./model/catalog";

const mongoUrl = process.env.MONGO_URL as string;

async function seedDatabase() {
  await mongoose.connect(mongoUrl);
  await Catalog.deleteMany({});
  await Catalog.create({
    sku: '111111',
    title: "T-Shirt",
    price: new mongoose.Types.Decimal128('12.99'),
    imageUrl: "https://picsum.photos/id/535/600"
  });
  await Catalog.create({
    sku: '222222',
    title: "Jeans",
    price: new mongoose.Types.Decimal128('40'),
    imageUrl: "https://picsum.photos/id/455/600"
  });
  await Catalog.create({
    sku: '333333',
    title: "Shoes",
    price: new mongoose.Types.Decimal128('19.99'),
    imageUrl: "https://picsum.photos/id/389/600"
  });
  await Catalog.create({
    sku: '444444',
    title: "Mug",
    price: new mongoose.Types.Decimal128('10000.99'),
    imageUrl: "https://picsum.photos/id/30/600"
  });
  await mongoose.connection.close();
}

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
  process.exit(1);
});
