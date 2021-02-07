import { getPokemon, Pokemon } from 'apis/getPokemon';
import { Card } from 'components/Card';
import React from 'react';

interface ItemProps {
  pokemon: Pokemon;
}

const Item = ({ pokemon }: ItemProps) => {
  return (
    <Card pokemon={pokemon} />
  )
};

export const getServerSideProps = async (contexts: any) => {
  try {
    const response = await getPokemon(contexts.params.number);
    console.log(response)
    if (response) {
      return {
        props: {
          pokemon: response,
        },
      };
    }
  } catch (error) {
    console.error('Error', error);
  }

  return {
    props: {
      pokemonList: [],
    },
  };
};

export default Item;