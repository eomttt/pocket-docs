import { Api } from 'apis/Api';
import { MAX_POKEMON_COUNT } from 'constants/common';

export interface ListItem {
  name: string;
  url: string;
}

interface Response {
  count: number;
  next: string;
  previous: string;
  results: ListItem[];
}

export const getPocketmonList = () => {
  return Api.get<{
    limit: number;
    offset: number;
  }, Response>({
    limit: MAX_POKEMON_COUNT,
    offset: 0,
  })
}