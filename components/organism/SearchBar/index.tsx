"use client";

import { FC, useEffect, useState } from "react";
import { useSearchPokemon } from "@hooks/useSearchPokemon";
import { SearchBarProps } from "./interface";
import { PokemonInterface } from "@/interfaces/pokemon";

export const SearchBar: FC<SearchBarProps> = ({ handleResults }) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(inputValue.trim());
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const { data, error, isLoading } = useSearchPokemon(debouncedSearch);

  useEffect(() => {
    handleResults(data as PokemonInterface);
  }, [data, handleResults]);

  return (
    <div className="mb-8 space-y-4 max-w-100%">
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-black"
      />

      {isLoading && debouncedSearch && (
        <p className="text-white">
          Searching <strong>{debouncedSearch}</strong>...
        </p>
      )}
      {error && debouncedSearch && (
        <p className="text-pokemon-red">Pokémon no encontrado</p>
      )}
    </div>
  );
};

export default SearchBar;
