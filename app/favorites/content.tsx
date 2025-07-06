"use client";

import Breadcrumb from "@/components/atoms/BreadCrumb";
import SecondaryCard from "@/components/atoms/secondaryCard";
import { useFavoritesStore } from "@/stores/favorite";

export const ContentFavorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6 text-white">
        Your Favorite Pokémon
      </h1>

      {favorites.length === 0 ? (
        <p className="inline-block bg-pokemon-red text-white text-lg font-bold px-3 py-1 m-1 | shadow-md">
          You haven&apos;t added any Pokémon to favorites yet
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {favorites.map((pokemon, index) => (
            <SecondaryCard
              genus={""}
              key={pokemon.id}
              {...pokemon}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ContentFavorite;
