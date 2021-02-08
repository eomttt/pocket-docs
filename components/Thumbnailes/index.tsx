import { PokemonThumbnail, Thumbnail } from 'components/Thumbnail';
import { IMAGE_URL, TITLE_IMAGE } from 'constants/common';
import { useGetPokemonList } from 'hooks/useGetPokemonList';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as Styles from './styles';

export const Thumbnailes = () => {
  const router = useRouter();
  const { data, isLoading } = useGetPokemonList();
  const pokemonList = useMemo(() => {
    if (data) {
      return data.results.map((item, index) => ({
        ...item,
        number: index + 1,
      }));
    }
    return [];
  }, [data]);
  const [thumbnailes, setThumbnailes] = useState<PokemonThumbnail[]>([]);

  useEffect(() => {
    setThumbnailes(
      pokemonList.map(pokemon => ({
        ...pokemon,
        image: `${IMAGE_URL}${pokemon.number}.png`,
      })),
    );
  }, [pokemonList]);

  const handleClickFindPokemon = useCallback(() => {
    router.push('docs');
  }, [router]);

  const pokemonImages = useMemo(
    () => (
      <>
        {thumbnailes.map((thumbnail, index) => (
          <Styles.Thumbnail
            delay={Math.random() * 5}
            left={Math.random() * 100}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <Thumbnail pokemon={thumbnail} />
          </Styles.Thumbnail>
        ))}
      </>
    ),
    [thumbnailes],
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Styles.Container>
      <Styles.Image src={TITLE_IMAGE} alt="titleImage" />
      <Styles.Text onClick={handleClickFindPokemon}>
        {'포켓몬 찾기 >'}
      </Styles.Text>
      {pokemonImages}
    </Styles.Container>
  );
};
