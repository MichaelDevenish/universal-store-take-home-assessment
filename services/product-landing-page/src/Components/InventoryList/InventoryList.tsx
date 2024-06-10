import {useFetchInventoryList} from "./hooks/fetchInventoryList";
import {InventoryItem} from "../InventoryItem";

export const InventoryList = () => {
  const {
    loading,
    data
  } = useFetchInventoryList()
  return (
    <>
      {loading ? 'loading' : null}
      {data.map((item) => (
        <InventoryItem item={item}/>
      ))}
    </>
  )
}