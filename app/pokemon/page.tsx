"use client";

import SecondaryCard from "@/components/atoms/secondaryCard";
import SearchBar from "@/components/organism/SearchBar";
import { usePokemonList } from "@/hooks/usePokemonList";
import { PokemonInterface } from "@/interfaces/pokemon";
import { useState } from "react";

interface PageProps {
  searchParams: { page?: string };
}

export default function PokemonPage({ searchParams }: PageProps) {
  const page = Number(searchParams?.page || 1);
  const limit = 12;
  const offset = (page - 1) * limit;
  const { data: pokemons } = usePokemonList(limit, offset);
  const [pokemonSearched, setPokemonSearched] = useState(
    {} as PokemonInterface
  );
  return (
    <>
      <SearchBar handleResults={(result) => setPokemonSearched(result)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {!pokemonSearched?.id &&
          pokemons?.map((pokemon) => (
            <SecondaryCard key={pokemon.id} {...pokemon} />
          ))}
        {pokemonSearched?.id && <SecondaryCard {...pokemonSearched} />}
      </div>
      {!pokemonSearched?.id && (
        <div className="flex justify-between text-white">
          {page > 1 && (
            <a href={`/pokemon?page=${page - 1}`} className="hover:underline">
              ← Prev
            </a>
          )}
          <a
            href={`/pokemon?page=${page + 1}`}
            className="hover:underline ml-auto"
          >
            Next →
          </a>
        </div>
      )}
    </>
  );
}
