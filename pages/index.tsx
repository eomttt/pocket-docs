import { getPocketmonList } from 'apis/getPokemonList';
import { PokemonListItem } from 'components/Card';
import { Cards } from 'components/Cards';
import Head from 'next/head';
import React from 'react';

interface HomeProps {
  pokemonList: PokemonListItem[];
}

const Home = ({ pokemonList }: HomeProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Cards pokemonList={pokemonList} />
  </>
);

export const getStaticProps = async () => {
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

export default Home;
