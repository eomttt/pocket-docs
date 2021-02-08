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
    <Layout
      image="https://user-images.githubusercontent.com/22593217/107186184-20b60280-6a27-11eb-8c70-2fff6e7fda8f.png"
      title="포켓몬 도감"
    >
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
