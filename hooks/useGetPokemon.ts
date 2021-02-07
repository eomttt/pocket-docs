import { getPokemon } from 'apis/getPokemon';
import { useQuery } from 'react-query';

export const useGetPokemon = (pokemonId: number) =>
  useQuery(
    ['pokemon', pokemonId],
    ({ queryKey }) => {
      const [, id] = queryKey;
      return getPokemon(id);
    },
    {
      enabled: !!pokemonId,
    },
  );
