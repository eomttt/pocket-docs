import { getPocketmonList } from 'apis/getPokemonList';
import { Layout } from 'components/Layout';
import { Thumbnailes } from 'components/Thumbnailes';
import { GetStaticProps } from 'next';
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const Home = () => (
  <Layout>
    <Thumbnailes />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('pokemonlist', getPocketmonList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
