import { getPocketmonList } from 'apis/getPokemonList';
import { Layout } from 'components/Layout';
import { Thumbnailes } from 'components/Thumbnailes';
import { GetServerSideProps } from 'next';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const Home = () => {
  const { data, isLoading } = useQuery('pokemonlist', getPocketmonList);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Thumbnailes
        pokemonList={data.results.map((item, index) => ({
          ...item,
          number: index + 1,
        }))}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('pokemonlist', getPocketmonList);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
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
