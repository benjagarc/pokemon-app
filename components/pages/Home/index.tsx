"use client";

import { HomeProps } from "./interface";
import { FC } from "react";
import Carousel from "@/components/molecules/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import PokemonCard from "@/components/atoms/Card";
// import { useCharacterEsse4ntials } from "@/hooks/useCharactersEssentials";
// import { useGamesEssentials } from "@/hooks/useGamesEssentials";

export const Home: FC<HomeProps> = ({ pokemonList }) => {
  const arrayLastEvolution = pokemonList.filter(
    (pokemon) => pokemon.id % 3 === 0
  );

  const pokemonEssentials = pokemonList.filter(
    (pokemon) => pokemon.id % 3 !== 0
  );

  // const { data: essentialCharacters } = useCharacterEsse4ntials();
  // const { data: games } = useGamesEssentials();

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

      {/* <section>
          <h2 className="text-xl font-bold mb-4 text-white">
            Games Essentials
          </h2>
          <ul className="list-disc ml-5 text-white">
            {games?.map((game) => (
              <li key={game.name}>{game.name}</li>
            ))}
          </ul>
        </section> */}
    </>
  );
};

export default Home;
