/* eslint-disable no-shadow */
import { PokemonType } from 'constants/type';

export const Color: Record<PokemonType, string> = {
  [PokemonType.Normal]: '#bdbdaf',
  [PokemonType.Poison]: '#a95c9f',
  [PokemonType.Psychic]: '#f461af',
  [PokemonType.Grass]: '#8bd54f',
  [PokemonType.Ground]: '#ebc856',
  [PokemonType.Ice]: '#97f1ff',
  [PokemonType.Fire]: '#fa5543',
  [PokemonType.Rock]: '#ccbc71',
  [PokemonType.Dragon]: '#8574ff',
  [PokemonType.Water]: '#56adf3',
  [PokemonType.Bug]: '#c4d11f',
  [PokemonType.Dark]: '#7c5f4c',
  [PokemonType.Fighting]: '#894c3b',
  [PokemonType.Ghost]: '#736fcd',
  [PokemonType.Steel]: '#c4c2db',
  [PokemonType.Flying]: '#79a3ff',
  [PokemonType.Electric]: '#fee33a',
  [PokemonType.Fairy]: '#f9adff',
};
