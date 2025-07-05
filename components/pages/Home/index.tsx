"use client";

import { HomeProps } from "./interface";
import { FC } from "react";
import Carousel from "@/components/molecules/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import PokemonCard from "@/components/atoms/PrincipalCard";
import SecondaryCard from "@/components/atoms/secondaryCard";
import { useGamesEssentials } from "@/hooks/useGamesEssentials";
import GameCard from "@/components/atoms/GameCard";
import { Game } from "@/components/atoms/GameCard/interface";

export const Home: FC<HomeProps> = ({ pokemonList }) => {
  const arrayLastEvolution = pokemonList.filter(
    (pokemon) => pokemon.id % 3 === 0
  );

  const pokemonEssentials = pokemonList.filter(
    (pokemon) => pokemon.id % 3 !== 0
  );

  const { data: gamesEssentials } = useGamesEssentials(3);

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
        {pokemonEssentials.slice(0, 3).map((pokemon) => (
          <SecondaryCard key={pokemon?.id} {...pokemon} />
        ))}
      </section>
      <h3 className="text-2xl max-sm:text-2xl text-center font-extrabold capitalize text-black drop-shadow-md break-words my-8">
        Games Essentials
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mt-5 pt-5 place-items-center">
        {gamesEssentials?.map((game: Game) => (
          <GameCard key={game?.name} game={game} />
        ))}
      </section>
    </>
  );
};

export default Home;
