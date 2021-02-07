import { ListItem } from 'apis/getPokemonList';
import React from 'react';
import * as Styles from './styles';

export type PokemonListItem = ListItem & {
  number: number;
};

export type PokemonCard = PokemonListItem & {
  image: string;
};

interface CardProps {
  pokemon: PokemonCard;
}

export const Card = ({ pokemon }: CardProps) => {
  const { image } = pokemon;

  return (
    <Styles.Container>
      <img src={image} alt="pokemonImage" />
    </Styles.Container>
  );
};
