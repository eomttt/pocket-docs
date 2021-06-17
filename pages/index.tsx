import { getPocketmonList } from 'apis/getPokemonList';
import { Layout } from 'components/Layout';
import { Thumbnailes } from 'components/Thumbnailes';
import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        console.log('DDD', data);
      } catch (e) {
        console.log('EEE', e);
      }
    })();
  }, []);

  return (
    <Layout>
      <Thumbnailes />
    </Layout>
  );
};

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
