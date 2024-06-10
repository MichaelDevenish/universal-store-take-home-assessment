import axios, {AxiosResponse} from "axios";

const responseInterceptor = (response: AxiosResponse) => {
  return response.data;
};

const inventoryApi = axios.create({
  baseURL: process.env.REACT_APP_INVENTORY_API_URL,
});

inventoryApi.interceptors.response.use(responseInterceptor);

export const useInventoryApi = () => {
  return inventoryApi;
};
