import { Api } from 'apis/Api';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';

export interface ListItem {
  name: string;
  url: string;
}

interface Params {
  limit: number;
  offset: number;
}

interface Response {
  count: number;
  next: string;
  previous: string;
  results: ListItem[];
}

export const getPocketmonList = () =>
  Api.get<Params, Response>(BASE_URL, {
    limit: MAX_POKEMON_COUNT,
    offset: 0,
  });
