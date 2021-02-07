import { Api } from 'apis/Api';
import { BASE_URL } from 'constants/common';
import { PokemonType } from 'constants/type';

interface Info {
  name: string;
  url: string;
}

export interface Sprites {
  frontDefault: string;
  backDefault: string;
}

export interface Type {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}

interface Response {
  name: string;
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
}

export type Pokemon = Response;

export const getPokemon = (pokemonId: number) => {
  if (pokemonId) {
    return Api.get<{}, Response>(`${BASE_URL}/${pokemonId}`);
  }
  return null;
};
