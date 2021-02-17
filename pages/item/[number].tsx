import { getPokemon } from 'apis/getPokemon';
import { Card } from 'components/Card';
import { Layout } from 'components/Layout';
import { MAX_POKEMON_COUNT } from 'constants/common';
import { Name } from 'constants/name';
import { useGetPokemon } from 'hooks/useGetPokemonList';
import { GetStaticProps } from 'next';
import React, { useMemo } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

interface ItemProps {
  id: number;
}

const Item = ({ id }: ItemProps) => {
  const { data, isLoading } = useGetPokemon(id);

  const types = useMemo(
    () => data?.types.reduce((acc, cur) => `${cur.type.name}, ${acc}`, ''),
    [data?.types],
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout
      title={Name[data.id]}
      image={data.sprites.frontDefault}
      favicon={data.sprites.frontDefault}
      description={types}
    >
      <Card pokemon={data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: Array(MAX_POKEMON_COUNT)
      .fill(null)
      .map((item, index) => ({
        params: {
          number: `${index + 1}`,
        },
      })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async contexts => {
  try {
    if (contexts?.params?.number) {
      const id = Number(contexts.params.number);
      const queryClient = new QueryClient();
      await queryClient.prefetchQuery('pokemons', () => getPokemon(id));

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

// export const getServerSideProps: GetServerSideProps = async contexts => {
//   try {
//     if (contexts?.params?.number) {
//       const id = Number(contexts.params.number);
//       const queryClient = new QueryClient();

//       await queryClient.prefetchQuery('pokemons', () => getPokemon(id));

//       return {
//         props: {
//           dehydratedState: dehydrate(queryClient),
//           id: contexts.params.number,
//         },
//       };
//     }
//   } catch (error) {
//     console.error('Error', error);
//   }

//   return {
//     props: {
//       id: 0,
//     },
//   };
// };

export default Item;
