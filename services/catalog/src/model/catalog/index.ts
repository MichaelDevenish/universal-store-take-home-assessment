import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: [true, 'sku is required']
  },
  title: {
    type: String,
    required: [true, 'title is required']
  },
  price:{
    type: mongoose.Types.Decimal128,
    required: [true, 'price is required']
  }
});

export const Catalog = mongoose.model('Catalog', catalogSchema);
