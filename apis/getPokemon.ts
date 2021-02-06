import { Api } from 'apis/Api';
import { BASE_URL } from 'constants/common';

interface Info {
  name: string;
  url: string;
}

interface Sprites {
  frontDefault: string;
}

interface Type {
  slot: number;
  type: {
    number: string;
    url: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Response {
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
}

export const getPokemon = (pokemonId: number) => {
  if (pokemonId) {
    return Api.get<{}, Response>(`${BASE_URL}/${pokemonId}`);
  }
  return null;
};
