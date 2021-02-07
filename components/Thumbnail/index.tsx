import { ListItem } from 'apis/getPokemonList';
import React from 'react';
import * as Styles from './styles';

export type PokemonListItem = ListItem & {
  number: number;
};

export type PokemonThumbnail = PokemonListItem & {
  image: string;
};

interface ThumbnailProps {
  pokemon: PokemonThumbnail;
}

export const Thumbnail = ({ pokemon }: ThumbnailProps) => {
  const { image } = pokemon;

  return (
    <Styles.Container>
      <img src={image} alt="pokemonImage" />
    </Styles.Container>
  );
};
