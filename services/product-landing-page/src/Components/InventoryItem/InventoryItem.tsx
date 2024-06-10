import {Catalog} from "../../Utils/requests/queryCatalog";
import './inventoryItem.css';

export const InventoryItem = ({item}: {item: Catalog & {inventoryLevel: number}}) => {
  return (
    <div className="inventory-item">
      <img className="inventory-item__image" src={item.imageUrl} alt={item.title}/>
      <div className="inventory-item__details">
        <div data-testid={`inventory-item-${item.sku}-title`}>{item.title}</div>
        <div data-testid={`inventory-item-${item.sku}-sku`}>SKU: {item.sku}</div>
        <div data-testid={`inventory-item-${item.sku}-price`}>Price: {item.price}</div>
        <div data-testid={`inventory-item-${item.sku}-stock`}>Stock Level: {item.inventoryLevel}</div>
      </div>
    </div>
  )
}