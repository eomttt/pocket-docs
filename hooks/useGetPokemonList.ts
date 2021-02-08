import { getPocketmonList } from 'apis/getPokemonList';
import { useQuery } from 'react-query';

export const useGetPokemonList = () =>
  useQuery('pokemonlist', getPocketmonList);
