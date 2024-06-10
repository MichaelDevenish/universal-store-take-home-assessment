import axios, {AxiosResponse} from "axios";

const responseInterceptor = (response: AxiosResponse) => {
  return response.data;
};

const catalogApi = axios.create({
  baseURL: process.env.REACT_APP_CATALOG_API_URL,
});

catalogApi.interceptors.response.use(responseInterceptor);

export const useCatalogApi = () => {
  return catalogApi;
};
