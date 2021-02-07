import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { camelize } from 'object-key-converter';

class Api {
  private request: AxiosInstance;

  constructor(headers?: any) {
    this.request = axios.create({
      responseType: 'json',
    });

    if (headers) {
      this.request.defaults.headers = { ...headers };
    }
  }

  private handleResponse = <R>(response: AxiosResponse<R>): R | undefined => {
    const { data } = response;
    if (data) {
      return camelize(data);
    }
    return undefined;
  };

  private handleError = (error: AxiosError) => {
    console.error('Api error', error);
    throw new Error();
  };

  async get<P, R = undefined>(url: string, params?: P): Promise<R | undefined> {
    try {
      const response: AxiosResponse<R> = await this.request.get(url, {
        params,
      });
      return this.handleResponse<R>(response);
    } catch (error) {
      this.handleError(error);
    }
    return undefined;
  }
}

const instance = new Api();

export { instance as Api };
