import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

interface ApiRequest {
  get(url: string, request?: AxiosRequestConfig): Promise<AxiosResponse>;
  delete(url: string, request?: AxiosRequestConfig): Promise<AxiosResponse>;
  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}

const apiRequest: ApiRequest = {
  get: (url, request) => baseInstance.get(url, request),
  delete: (url, request) => baseInstance.delete(url, request),
  post: (url, data, config) => baseInstance.post(url, data, config),
};

export default apiRequest;
