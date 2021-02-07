import { getPokemon, Pokemon } from 'apis/getPokemon';
import { Card } from 'components/Card';
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

interface ItemProps {
  dehydratedState: {
    mutation: any;
    queries: [
      {
        state: {
          data: Pokemon;
        };
      },
    ];
  };
}

const Item = ({ dehydratedState }: ItemProps) => (
  <Card pokemon={dehydratedState.queries[0].state.data} />
);

export const getServerSideProps = async (contexts: any) => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('posts', () =>
      getPokemon(contexts.params.number),);

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

export default Item;
