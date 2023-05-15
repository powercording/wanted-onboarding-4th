import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiRequest {
  get(url: string, request?: AxiosRequestConfig): Promise<AxiosResponse>;
  delete(url: string, request?: AxiosRequestConfig): Promise<AxiosResponse>;
  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}
