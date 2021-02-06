import { getPokemon } from 'apis/getPokemon';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

export const Dictionary = () => {
  const [value, setValue] = useState<number>();
  const [pokemonId, setPokemonId] = useState(0);

  const { data, isError, isLoading } = useQuery(
    ['pokemon', pokemonId],
    ({ queryKey }) => {
      const [, id] = queryKey;
      return getPokemon(id);
    },
    {
      enabled: !!pokemonId,
    },
  );

  const handleChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }, []);

  const handleClickFind = useCallback(() => {
    if (value) {
      setPokemonId(value);
    }
  }, [value]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error: 잠시 후 다시 시도해주세요.</div>;
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Pokemon id"
        onChange={handleChangeId}
        value={value || ''}
      />
      <div>
        <img src={data?.sprites?.frontDefault} alt="pokemonImage" />
      </div>
      <button type="button" onClick={handleClickFind}>
        Find
      </button>
    </div>
  );
};
