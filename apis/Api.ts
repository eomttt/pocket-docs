import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

class Api {
  private request: AxiosInstance;

  constructor(url: string, headers?: any) {
    this.request = axios.create({
      baseURL: url,
      responseType: 'json',
    });

    if (headers) {
      this.request.defaults.headers = { ...headers };
    }
  }

  private handleResponse = <R>(response: AxiosResponse<R>): R | undefined => {
    const { data } = response;
    if (data) {
      return data;
    }
    return undefined;
  };

  private handleError = (error: AxiosError) => {
    console.error('Api error', error);
    throw new Error();
  };

  async get<P, R = undefined>(params?: P): Promise<R | undefined> {
    try {
      const response: AxiosResponse<R> = await this.request.get('', {
        params,
      });
      return this.handleResponse<R>(response);
    } catch (error) {
      this.handleError(error);
    }
    return undefined;
  }
}

const instance = new Api(BASE_URL);

export { instance as Api };