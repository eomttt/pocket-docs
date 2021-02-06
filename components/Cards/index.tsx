import { Card, PokemonCard, PokemonListItem } from 'components/Card';
import { IMAGE_URL, MAX_POKEMON_COUNT, TITLE_IMAGE } from 'constants/common';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Styles from './styles';

interface CardsProps {
  pokemonList: PokemonListItem[];
}

export const Cards = ({ pokemonList }: CardsProps) => {
  const router = useRouter();
  const [translateX, setTranslateX] = useState(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    setCards(
      pokemonList.map(pokemon => ({
        ...pokemon,
        image: `${IMAGE_URL}${pokemon.number}.png`,
      })),
    );
  }, []);

  useEffect(() => {
    let count = 1;
    let moveUnit = 9;
    const interval = setInterval(() => {
      setTranslateX(moveUnit * -1);
      if (((MAX_POKEMON_COUNT * count) / 2) * 9 <= moveUnit) {
        setCards(prev => [
          ...prev,
          ...prev.filter((item, index) => index < MAX_POKEMON_COUNT),
        ]);
        count += 1;
      }
      moveUnit += 9;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClickFindPokemon = useCallback(() => {
    router.push('docs');
  }, []);

  return (
    <Styles.Container>
      <Styles.Image src={TITLE_IMAGE} alt="titleImage" />
      <Styles.Content translateX={translateX}>
        {cards.map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Styles.CardWrapper key={index}>
            <Card pokemon={card} />
          </Styles.CardWrapper>
        ))}
      </Styles.Content>
      <Styles.Text onClick={handleClickFindPokemon}>
        {'포켓몬 찾기 >'}
      </Styles.Text>
    </Styles.Container>
  );
};
