import { Sprites } from 'apis/getPokemon';
import { useMemo } from 'react';

export const usePokemonImage = (sprites?: Sprites) =>
  useMemo(() => {
    if (sprites) {
      return {
        frontImage: sprites.frontDefault,
        backImage: sprites.backDefault,
      };
    }

    return {
      frontImage: '',
      backImage: '',
    };
  }, [sprites]);
