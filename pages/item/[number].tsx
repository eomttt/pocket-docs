import { getPokemon } from 'apis/getPokemon';
import { Card } from 'components/Card';
import { Layout } from 'components/Layout';
import { Name } from 'constants/name';
import { GetServerSideProps } from 'next';
import React, { useMemo } from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

interface ItemProps {
  id: number;
}

const Item = ({ id }: ItemProps) => {
  const { data, isLoading } = useQuery('pokemons', () => getPokemon(id));

  const types = useMemo(
    () => data?.types.reduce((acc, cur) => `${cur.type.name}, ${acc}`, ''),
    [],
  );

  if (isLoading || !data) {
    return <div>Lodaing...</div>;
  }

  return (
    <Layout
      title={Name[data.id]}
      image={data.sprites.frontDefault}
      description={types}
    >
      <Card pokemon={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async contexts => {
  try {
    if (contexts?.params?.number) {
      const queryClient = new QueryClient();

      await queryClient.prefetchQuery('pokemons', () =>
        getPokemon(Number(contexts?.params?.number)),
      );

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          id: contexts.params.number,
        },
      };
    }
  } catch (error) {
    console.error('Error', error);
  }

  return {
    props: {
      id: 0,
    },
  };
};

export default Item;
