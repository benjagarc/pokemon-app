"use client";

import SecondaryCard from "@/components/atoms/secondaryCard";
import { usePokemonList } from "@/hooks/usePokemonList";

interface PageProps {
  searchParams: { page?: string };
}

export default function PokemonPage({ searchParams }: PageProps) {
  const page = Number(searchParams?.page || 1);
  const limit = 12;
  const offset = (page - 1) * limit;
  const { data: pokemons } = usePokemonList(limit, offset);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemons?.map((pokemon) => (
          <SecondaryCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
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
    </>
  );
}
