"use client";

import SecondaryCard from "@/components/atoms/secondaryCard";
import SkeletonCard from "@/components/atoms/SkeletonCard";
import { useFavoritesStore } from "@/stores/favorite";
import { useLayoutEffect, useState } from "react";

export const ContentFavorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setLoading((prev) => !prev);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Your Favorite Pokémon
      </h1>

      {loading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          </div>
        </>
      )}

      {!loading && favorites?.length === 0 && (
        <p className="inline-block bg-pokemon-red text-white text-lg font-bold px-3 py-1 m-1 | shadow-md">
          You haven&apos;t added any Pokémon to favorites yet
        </p>
      )}

      {!loading && favorites?.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {favorites.map((pokemon) => (
              <SecondaryCard genus={""} key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ContentFavorite;
