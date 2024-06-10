import {describe, test, expect} from '@jest/globals';
const mockingoose = require("mockingoose");
import mongoose from "mongoose";
import {Catalog} from "../../model/catalog";
import {fetchCatalog} from "./index";

describe('catalog service', () => {
  test('expect catalog to return items', async () => {
    const mock = [
      { sku: '111111', title: "T-Shirt", price: new mongoose.Types.Decimal128('12.99') },
      { sku: '222222', title: "Jeans", price: new mongoose.Types.Decimal128('40') },
      { sku: '333333', title: "Shoes", price: new mongoose.Types.Decimal128('19.99') }
    ]

    mockingoose(Catalog).toReturn(mock, 'find')
    expect(await fetchCatalog()).toMatchObject([
      {sku: "111111", title: "T-Shirt", price: "12.99"},
      {sku: "222222", title: "Jeans", price: "40"},
      {sku: "333333", title: "Shoes", price: "19.99"}
    ])
  });
});