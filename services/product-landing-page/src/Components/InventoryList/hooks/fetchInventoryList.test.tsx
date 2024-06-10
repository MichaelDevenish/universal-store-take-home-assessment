import React from 'react';
import {renderHook} from '@testing-library/react';
import '@testing-library/jest-dom'
import {useMapInventoryList} from "./fetchInventoryList";
import {describe} from "@jest/globals";

const catalog = [
  {
    "sku": "111111",
    "title": "T-Shirt",
    "price": "12.99",
    "imageUrl": "https://picsum.photos/id/535/600"
  },
  {
    "sku": "222222",
    "title": "Jeans",
    "price": "40",
    "imageUrl": "https://picsum.photos/id/455/600"
  },
  {
    "sku": "333333",
    "title": "Shoes",
    "price": "19.99",
    "imageUrl": "https://picsum.photos/id/389/600"
  },
  {
    "sku": "444444",
    "title": "Mug",
    "price": "10000.99",
    "imageUrl": "https://picsum.photos/id/30/600"
  }
]

const inventory = [
  { sku: '111111', quantity: 3 },
  { sku: '222222', quantity: 7 },
  { sku: '333333', quantity: 1 },
  { sku: '444444', quantity: 0 }
]

describe('useMapInventoryList', () => {
  test('maps inventory list filtering out out of stock', () => {
    const { result } = renderHook(() => useMapInventoryList(inventory, catalog));
    expect(result.current).toMatchObject([
      {
        sku: '111111',
        title: 'T-Shirt',
        price: '12.99',
        imageUrl: 'https://picsum.photos/id/535/600',
        inventoryLevel: 3
      },
      {
        sku: '222222',
        title: 'Jeans',
        price: '40',
        imageUrl: 'https://picsum.photos/id/455/600',
        inventoryLevel: 7
      },
      {
        sku: '333333',
        title: 'Shoes',
        price: '19.99',
        imageUrl: 'https://picsum.photos/id/389/600',
        inventoryLevel: 1
      }
    ])
  });

  test('should not crash on no input', () => {
    const { result } = renderHook(() => useMapInventoryList());
    expect(result.current).toEqual([])
  });
})
