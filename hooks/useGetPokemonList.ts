import { getPokemon } from 'apis/getPokemon';
import { getPocketmonList } from 'apis/getPokemonList';
import { useQuery } from 'react-query';

export const useGetPokemonList = () =>
  useQuery('pokemonlist', getPocketmonList);

export const useGetPokemon = (id: number) =>
  useQuery('pokemons', () => getPokemon(id));
