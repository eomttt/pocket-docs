import { Color } from 'constants/color';
import { MAX_POKEMON_COUNT } from 'constants/common';
import { useGetPokemon } from 'hooks/useGetPokemon';
import { usePokemonAbilites } from 'hooks/usePokemonAbilities';
import { usePokemonImage } from 'hooks/usePokemonImage';
import { usePokemonTypes } from 'hooks/usePokemonTypes';
import React, {
 ChangeEvent, useCallback, useMemo, useState 
} from 'react';
import * as Styles from './styles';

export const Dictionary = () => {
  const [value, setValue] = useState<number>();
  const [pokemonId, setPokemonId] = useState(0);

  const { data, isError, isLoading } = useGetPokemon(pokemonId);

  const pokemonTypes = usePokemonTypes(data?.types);
  const pokemonAbilites = usePokemonAbilites(data?.abilities);
  const { frontImage, backImage } = usePokemonImage(data?.sprites);
  const pokemonName = useMemo(() => data?.name, [data?.name]);
  const pokemonType = useMemo(() => pokemonTypes[0]?.type.name, [pokemonTypes]);

  const handleChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }, []);

  const handleClickFind = useCallback(() => {
    if (Number(value) > MAX_POKEMON_COUNT) {
      alert(`${MAX_POKEMON_COUNT} 이하로 입력해주세요.`);
      return;
    }
    if (value) {
      setPokemonId(value);
    }
  }, [value]);

  if (isError) {
    return <div>Error: 잠시 후 다시 시도해주세요.</div>;
  }

  return (
    <Styles.Container>
      <Styles.InputContainer>
        <Styles.Input
          type="number"
          placeholder="포켓몬 아이디를 입력해보세요."
          onChange={handleChangeId}
          value={value || ''}
        />
        <Styles.Button type="button" onClick={handleClickFind}>
          찾기
        </Styles.Button>
      </Styles.InputContainer>
      {pokemonType ? (
        <Styles.CardContainer
          isShow={!!pokemonType}
          backgroundColor={Color[pokemonType]}
        >
          <Styles.ImageContainer>
            <Styles.Image src={frontImage} alt="pokemonFront" />
            <Styles.Image src={backImage} alt="pokemonBack" />
          </Styles.ImageContainer>
          <Styles.Title>{pokemonName}</Styles.Title>
          <Styles.Types>
            {pokemonTypes.map(type => (
              <Styles.Type
                key={type.type.name}
                backgroundColor={Color[type.type.name]}
              >
                {type.type.name}
              </Styles.Type>
            ))}
          </Styles.Types>
          <Styles.Abilities backgroundColor={Color[pokemonType]}>
            {pokemonAbilites.map(ability => (
              <Styles.Ability key={ability.ability.name}>
                {ability.ability.name}
              </Styles.Ability>
            ))}
          </Styles.Abilities>
        </Styles.CardContainer>
      ) : (
        <></>
      )}
    </Styles.Container>
  );
};
