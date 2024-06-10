import {Catalog, useQueryCatalog} from "../../../Utils/requests/queryCatalog";
import {Inventory, useQueryInventory} from "../../../Utils/requests/queryInventory";
import {useMemo} from "react";

export const useMapInventoryList = (inventory?: Inventory[], catalog?: Catalog[]) => {
  const inventoryLevels = useMemo(() => {
    return new Map(inventory?.map((item) => {
      return [item.sku, item.quantity]
    }))
  }, [inventory])

  return useMemo(() => {
    return catalog?.flatMap<Catalog & {inventoryLevel: number}>((catalog) => {
      const inventoryLevel = inventoryLevels.get(catalog.sku)

      if (!inventoryLevel || inventoryLevel === 0) {
        return []
      }

      return {
        ...catalog,
        inventoryLevel
      }
    }) ?? []
  }, [inventoryLevels,catalog])

}

export const useFetchInventoryList = () => {
  const queryCatalog = useQueryCatalog()
  const queryInventory = useQueryInventory()
  const data = useMapInventoryList(queryInventory.data, queryCatalog.data)

  return {
    loading: queryCatalog.isLoading || queryInventory.isLoading,
    data
  }
}