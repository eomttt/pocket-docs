import { getPocketmonList } from 'apis/getPokemonList';
import { PokemonListItem } from 'components/Thumbnail';
import { Dictionary } from 'components/Dictionary';
import React from 'react';

interface DocsProps {
  pokemonList: PokemonListItem[];
}

const Docs = ({ pokemonList }: DocsProps) => (
  <>
    <Dictionary pokemonList={pokemonList} />
  </>
);

export const getServerSideProps = async () => {
  try {
    const response = await getPocketmonList();
    if (response?.results) {
      const pokemonList = response.results.map((item, index) => ({
        ...item,
        number: index + 1,
      }));

      return {
        props: {
          pokemonList,
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

export default Docs;
