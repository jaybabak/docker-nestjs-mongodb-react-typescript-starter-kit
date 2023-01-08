import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { HttpClientInterface } from "./HttpClientInterface";
import { TokenStorage } from "../../services";
// import TokenStorage from "../../services/storage/TokenStorage/TokenStorage";

export default class HttpClient implements HttpClientInterface {
  public client: AxiosInstance;
  private baseUrl: string | undefined;
  
  constructor(baseUrl = process.env.REACT_APP_BASE_URL) {
    this.baseUrl = baseUrl;
    // Set config defaults when creating the instance.
    this.client = axios.create({
      baseURL: baseUrl
    });

    this.addAuthorizationHeader();
    this.addContentTypeHeader();
  }

  /** @inheritdoc */
  async get(url = '', options: AxiosRequestConfig= {}): Promise<any> {
    try {
      // Ensures that these values are always added.
      options.method = 'GET';
      const response:AxiosResponse = await this.client.get(url, options);
      return response;
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        throw error
      }

      throw error;
    }
  }

  /** @inheritdoc */
  async post(url = '', options: AxiosRequestConfig = {}): Promise<any> {
    try {
      // Ensures that these values are always added.
      options.method = 'POST';
      const response:AxiosResponse = await this.client.post(url, options?.data, options);
      return response;
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }

  async addAuthorizationHeader(): Promise<void> {
    this.client.interceptors.request.use(
      config => {
        const accessToken = TokenStorage.getInstance().getAccessToken();

        config.headers = config.headers ?? {};

        if (accessToken) {
          if(!config.headers.hasOwnProperty('Authorization')) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
        }
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
  }

  async addContentTypeHeader(): Promise<void> {
    this.client.interceptors.request.use(
      config => {
        config.headers = config.headers ?? {};

        if(!config.headers.hasOwnProperty('Content-Type')) {
          config.headers['Content-Type'] = 'application/json';
        }
        return config;

      },
      error => {
        Promise.reject(error)
      }
    )
  }
}