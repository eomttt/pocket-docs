import { Type } from 'apis/getPokemon';
import { useMemo } from 'react';

export const usePokemonTypes = (types?: Type[]) =>
  useMemo(() => {
    if (types) {
      return [...types];
    }

    return [];
  }, [types]);
