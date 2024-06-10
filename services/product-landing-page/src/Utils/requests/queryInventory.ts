import {useQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {useInventoryApi} from "../axios";

export interface Inventory {
  sku: string,
  quantity: number
}

export const useQueryInventory = ( ) => {
  const inventoryApi = useInventoryApi()
  const queryFn = useCallback(() => {
    return inventoryApi.get<never, Inventory[]>('inventory')
  }, [inventoryApi])

  return useQuery({
    queryKey: ['inventories'],
    queryFn
  })
}