import { Ability } from 'apis/getPokemon';
import { useMemo } from 'react';

export const usePokemonAbilites = (abilities?: Ability[]) =>
  useMemo(() => {
    if (abilities) {
      return [...abilities];
    }

    return [];
  }, [abilities]);
