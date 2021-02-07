import { Card, PokemonCard, PokemonListItem } from 'components/Card';
import { IMAGE_URL, TITLE_IMAGE } from 'constants/common';
import { useRouter } from 'next/router';
import React, {
 useCallback, useEffect, useMemo, useState 
} from 'react';
import * as Styles from './styles';

interface CardsProps {
  pokemonList: PokemonListItem[];
}

export const Cards = ({ pokemonList }: CardsProps) => {
  const router = useRouter();
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    setCards(
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
        {cards.map((card, index) => (
          <Styles.CardWrapper
            delay={Math.random() * 5}
            left={Math.random() * 100}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <Card pokemon={card} />
          </Styles.CardWrapper>
        ))}
      </>
    ),
    [cards],
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
