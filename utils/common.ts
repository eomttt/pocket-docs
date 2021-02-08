import { PokemonListItem } from 'components/Thumbnail';
import { Name } from 'constants/name';

export const getPokemonNumber = (name: string, list: PokemonListItem[]) => {
  let pokemonNumber = 0;
  list.some(item => {
    if (item.name === name) {
      pokemonNumber = item.number;
      return true;
    }
    return false;
  });

  return pokemonNumber;
};

export const getPokemonNumberbyKo = (koName: string) => {
  let pokemonNumber = 0;
  Object.entries(Name).some(([number, name]) => {
    if (name === koName) {
      pokemonNumber = Number(number);
      return true;
    }
    return false;
  });
  return pokemonNumber;
};
