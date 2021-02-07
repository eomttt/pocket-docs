import { Pokemon } from 'apis/getPokemon';
import { Color } from 'constants/color';
import { usePokemonAbilites } from 'hooks/usePokemonAbilities';
import { usePokemonImage } from 'hooks/usePokemonImage';
import { usePokemonTypes } from 'hooks/usePokemonTypes';
import React, { useMemo } from 'react';
import * as Styles from './style';

interface CardProps {
  pokemon: Pokemon;
}

export const Card = ({ pokemon }: CardProps) => {
  const pokemonTypes = usePokemonTypes(pokemon.types);
  const pokemonAbilites = usePokemonAbilites(pokemon.abilities);
  const { frontImage, backImage } = usePokemonImage(pokemon.sprites);
  const pokemonName = useMemo(() => pokemon.name, [pokemon.name]);
  const pokemonType = useMemo(() => pokemonTypes[0]?.type.name, [pokemonTypes]);

  return (
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
  );
};
