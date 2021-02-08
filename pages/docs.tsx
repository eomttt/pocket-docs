import { getPocketmonList } from 'apis/getPokemonList';
import { Dictionary } from 'components/Dictionary';
import { Layout } from 'components/Layout';
import React from 'react';
import { useQuery } from 'react-query';

const Docs = () => {
  const { data, isLoading } = useQuery('pokemonlist', getPocketmonList);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="포켓몬 도감">
      <Dictionary
        pokemonList={data.results.map((item, index) => ({
          ...item,
          number: index + 1,
        }))}
      />
    </Layout>
  );
};

export default Docs;
