import {useQuery} from "@tanstack/react-query";
import {useCatalogApi} from "../axios";
import {useCallback} from "react";

export interface Catalog {
  sku: string,
  title: string,
  price: string,
  imageUrl: string
}

export const useQueryCatalog = ( ) => {
  const catalogApi = useCatalogApi()

  const queryFn = useCallback(() => {
    return catalogApi.get<never, Catalog[]>('catalog')
  }, [catalogApi])

  return useQuery({
    queryKey: ['catalogs'],
    queryFn
  })
}