import {Catalog, useQueryCatalog} from "../../../Utils/requests/queryCatalog";
import {useQueryInventory} from "../../../Utils/requests/queryInventory";
import {useMemo} from "react";

export const useFetchInventoryList = () => {
  const queryCatalog = useQueryCatalog()
  const queryInventory = useQueryInventory()

  const inventoryLevels = useMemo(() => {
    return new Map(queryInventory.data?.map((item) => {
      return [item.sku, item.quantity]
    }))
  }, [queryInventory])

  const data = useMemo(() => {
    return queryCatalog.data?.flatMap<Catalog & {inventoryLevel: number}>((catalog) => {
      const inventoryLevel = inventoryLevels.get(catalog.sku)

      if (!inventoryLevel || inventoryLevel === 0) {
        return []
      }

      return {
        ...catalog,
        inventoryLevel
      }
    }) ?? []
  }, [inventoryLevels,queryCatalog])

  return {
    loading: queryCatalog.isLoading || queryInventory.isLoading,
    data
  }
}