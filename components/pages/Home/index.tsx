"use client";

import { HomeProps } from "./interface";
import { FC, Suspense } from "react";
import Carousel from "@/components/molecules/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import PokemonCard from "@/components/atoms/PrincipalCard";
import { useGamesEssentials } from "@/hooks/useGamesEssentials";
import { Game } from "@/components/atoms/GameCard/interface";
import SkeletonCard from "@/components/atoms/SkeletonCard";
import dynamic from "next/dynamic";

const SecondaryCard = dynamic(() => import("@/components/atoms/secondaryCard"));
const GameCard = dynamic(() => import("@/components/atoms/GameCard"));

export const Home: FC<HomeProps> = ({ pokemonList }) => {
  const arrayLastEvolution = pokemonList.filter(
    (pokemon) => pokemon.id % 3 === 0
  );

  const pokemonEssentials = pokemonList.filter(
    (pokemon) => pokemon.id % 3 !== 0
  );

  const { data: gamesEssentials } = useGamesEssentials(3);
  const fakeCards = Array(3).fill(0);

  return (
    <>
      <section>
        <Carousel>
          {arrayLastEvolution.map((pokemon) => (
            <SwiperSlide key={pokemon.id}>
              <PokemonCard {...pokemon} />
            </SwiperSlide>
          ))}
        </Carousel>
      </section>
      <h3 className="text-2xl max-sm:text-2xl text-center font-extrabold capitalize text-black drop-shadow-md break-words my-5">
        Characters Essentials
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mt-5 pt-5 place-items-center">
        <Suspense
          fallback={
            <>
              {fakeCards.map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          }
        >
          {pokemonEssentials.slice(0, 3).map((pokemon) => (
            <SecondaryCard key={pokemon?.id} {...pokemon} />
          ))}
        </Suspense>
      </section>
      <h3 className="text-2xl max-sm:text-2xl text-center font-extrabold capitalize text-black drop-shadow-md break-words my-8">
        Games Essentials
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mt-5 pt-5 place-items-center">
        <Suspense
          fallback={
            <>
              {fakeCards.map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          }
        >
          {gamesEssentials?.map((game: Game) => (
            <GameCard key={game?.name} game={game} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default Home;
