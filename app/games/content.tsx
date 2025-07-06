"use client";

import Breadcrumb from "@/components/atoms/BreadCrumb";
import GameCard from "@/components/atoms/GameCard";
import { Game } from "@/components/atoms/GameCard/interface";
import SkeletonCard from "@/components/atoms/SkeletonCard";
import Pagination from "@/components/molecules/Paginator";
import { useGamesEssentials } from "@/hooks/useGamesEssentials";
import { FC } from "react";

interface ContentPokemonProps {
  currentPage?: string;
}

export const ContentPokemon: FC<ContentPokemonProps> = ({ currentPage }) => {
  const page = Number(currentPage || 1);
  const limit = 15;
  const offset = (page - 1) * limit;
  const { data, isLoading } = useGamesEssentials(limit, offset);
  return (
    <>
      <Breadcrumb />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.games?.map((game: Game) => (
          <GameCard key={game?.name} game={game} />
        ))}
        {isLoading && (
          <>
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          </>
        )}
      </div>
      {!isLoading && (
        <Pagination
          currentPage={page}
          basePath="/games"
          totalPages={Math.round(data?.count / limit)}
        />
      )}
    </>
  );
};

export default ContentPokemon;
