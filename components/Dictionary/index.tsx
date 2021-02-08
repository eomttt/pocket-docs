import { PokemonListItem } from 'components/Thumbnail';
import { IMAGE_URL, MAX_POKEMON_COUNT } from 'constants/common';
import { Name } from 'constants/name';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { getPokemonNumber, getPokemonNumberbyKo } from 'utils/common';
import * as Styles from './styles';

interface DicionaryProps {
  pokemonList: PokemonListItem[];
}

export const Dictionary = ({ pokemonList }: DicionaryProps) => {
  const router = useRouter();
  const [value, setValue] = useState<number | string>();

  const handleChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleClickFind = useCallback(() => {
    let itemId = value;

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(Number(value))) {
      const koNumber = getPokemonNumberbyKo(value as string);
      const number = getPokemonNumber(value as string, pokemonList);

      if (koNumber <= 0 && number <= 0) {
        alert('정확한 이름을 입력해 주세요.');
        return;
      }

      itemId = Math.max(koNumber, number);
    } else if (Number(value) > MAX_POKEMON_COUNT) {
      alert(`${MAX_POKEMON_COUNT} 이하로 입력해 주세요.`);
      return;
    }

    router.push(`item/${itemId}`);
  }, [value]);

  const handleClickCard = useCallback((id: number) => {
    router.push(`item/${id}`);
  }, []);

  return (
    <Styles.Container>
      <Styles.InputContainer>
        <Styles.Input
          placeholder="포켓몬 (아이디 또는 이름)를(을) 입력해보세요."
          onChange={handleChangeId}
          value={value || ''}
        />
        <Styles.Button type="button" onClick={handleClickFind}>
          찾기
        </Styles.Button>
      </Styles.InputContainer>
      <Styles.Items>
        {pokemonList.map(pokemon => (
          <Styles.Item
            key={pokemon.number}
            onClick={() => handleClickCard(pokemon.number)}
          >
            <Styles.ItemContent>
              <img
                src={`${IMAGE_URL}${pokemon.number}.png`}
                alt="pokemonImage"
              />
              <div>{`${pokemon.number}. ${Name[pokemon.number]}`}</div>
            </Styles.ItemContent>
          </Styles.Item>
        ))}
      </Styles.Items>
    </Styles.Container>
  );
};
