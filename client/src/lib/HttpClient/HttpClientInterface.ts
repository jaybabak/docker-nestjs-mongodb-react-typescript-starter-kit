import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpClientInterface {

  /**
   * Make Get requests using http client
   * @param [url] The target URL string expected.
   * @param [options] A AxiosResquestConfig object or leave empty.
   * @returns {AxiosResponse|AxiosError}  Returns an Axios response or error. 
   */
  get(url:string, options: AxiosRequestConfig) :Promise<AxiosResponse>;

  /**
   * Make Post requests using http client
   * @param [url] The target URL string expected.
   * @param [options] A AxiosResquestConfig object or leave empty.
   * @returns {AxiosResponse|AxiosError}  Returns an Axios response or error. 
   */
  post(url:string, options: AxiosRequestConfig) :Promise<AxiosResponse>;
}