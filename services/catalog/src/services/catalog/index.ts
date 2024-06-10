import {Catalog} from "../../model/catalog";

const fetchCatalog = async () => {
  const catalogs = await Catalog.find().exec()
  return catalogs.map((catalog) => {
    return {
      sku: catalog.sku,
      title: catalog.title,
      price: catalog.price.toString(),
      imageUrl: catalog.imageUrl
    }
  })
}

export {
  fetchCatalog
}