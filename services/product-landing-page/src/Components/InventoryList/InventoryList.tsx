import {useFetchInventoryList} from "./hooks/fetchInventoryList";

export const InventoryList = () => {
  const {
    loading,
    data
  } = useFetchInventoryList()
  return (
    <>
      {loading ? ('loading') : null}
      {data.map((item) => {
        return (
          <div>{item.title} </div>
        )
      })}
    </>
  )
}