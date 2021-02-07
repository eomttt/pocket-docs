import {
  Thumbnail,
  PokemonThumbnail,
  PokemonListItem,
} from 'components/Thumbnail';
import { IMAGE_URL, TITLE_IMAGE } from 'constants/common';
import { useRouter } from 'next/router';
import React, {
 useCallback, useEffect, useMemo, useState 
} from 'react';
import * as Styles from './styles';

interface ThumbnailesProps {
  pokemonList: PokemonListItem[];
}

export const Thumbnailes = ({ pokemonList }: ThumbnailesProps) => {
  const router = useRouter();
  const [thumbnailes, setThumbnailes] = useState<PokemonThumbnail[]>([]);

  useEffect(() => {
    setThumbnailes(
      pokemonList.map(pokemon => ({
        ...pokemon,
        image: `${IMAGE_URL}${pokemon.number}.png`,
      })),
    );
  }, []);

  const handleClickFindPokemon = useCallback(() => {
    router.push('docs');
  }, []);

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
