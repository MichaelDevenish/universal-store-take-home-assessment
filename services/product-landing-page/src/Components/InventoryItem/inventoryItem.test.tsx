import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {InventoryItem} from "./InventoryItem";

test('renders inventory item', () => {
  const mockItem = {
    title: 'testTitle',
    sku: "testSku",
    imageUrl: "https://picsum.photos/id/535/600",
    inventoryLevel: 1,
    price: '2.5'
  }
  render(<InventoryItem item={mockItem} />);
  const titleElement = screen.getByTestId(`inventory-item-${mockItem.sku}-title`);
  expect(titleElement).toHaveTextContent(mockItem.title);
  const skuElement = screen.getByTestId(`inventory-item-${mockItem.sku}-sku`);
  expect(skuElement).toHaveTextContent(mockItem.sku);
  const priceElement = screen.getByTestId(`inventory-item-${mockItem.sku}-price`);
  expect(priceElement).toHaveTextContent(mockItem.price);
  const stockElement = screen.getByTestId(`inventory-item-${mockItem.sku}-stock`);
  expect(stockElement).toHaveTextContent(mockItem.inventoryLevel.toString());
});
