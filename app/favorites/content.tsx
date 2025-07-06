"use client";

import SecondaryCard from "@/components/atoms/secondaryCard";
import SkeletonCard from "@/components/atoms/SkeletonCard";
import { useFavoritesStore } from "@/stores/favorite";
import { Suspense } from "react";

export const ContentFavorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Your Favorite Pokémon
      </h1>

      <Suspense fallback={<SkeletonCard />}>
        {favorites.length === 0 ? (
          <p className="text-pokemon-red">
            You haven&apos;t added any Pokémon to favorites yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {favorites.map((pokemon) => (
              <SecondaryCard genus={""} key={pokemon.id} {...pokemon} />
            ))}
          </div>
        )}
      </Suspense>
    </section>
  );
};

export default ContentFavorite;
