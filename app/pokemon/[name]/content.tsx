"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PokemonInterface,
  PopkemonDetailInterface,
} from "@/interfaces/pokemon";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import SearchBar from "@/components/organism/SearchBar";
import { usePokemonList } from "@/hooks/usePokemonList";
import SecondaryCard from "@/components/atoms/secondaryCard";
import SkeletonCard from "@/components/atoms/SkeletonCard";

const FavoriteButton = dynamic(
  () => import("@/components/atoms/FavoriteButton"),
  { ssr: false }
);

export const ContentName: FC<PopkemonDetailInterface> = ({
  abilities,
  description,
  id,
  name,
  height,
  image,
  type,
  types,
  weight,
}) => {
  const [pokemonSearched, setPokemonSearched] = useState(
    {} as PokemonInterface
  );

  const [randomOffset] = useState(() => {
    return Math.floor(Math.random() * 1000);
  });

  const { data: pokemons, isLoading } = usePokemonList(4, randomOffset);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto px-6 py-10 text-white max-sm:px-1 max-sm:py-3 relative"
    >
      <FavoriteButton
        id={id}
        name={name}
        image={image}
        type={type}
        description={description}
        size="text-3xl"
      />
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/"
          className="inline-block mb-4 text-blue-300 underline text-sm hover:text-blue-200 transition"
        >
          ← Go back
        </Link>
      </motion.div>

      <motion.h1
        className="text-4xl max-sm:text-2xl font-bold capitalize mb-4 max-sm:mb-1 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {name}{" "}
        <span className="text-yellow-300">#{String(id).padStart(4, "0")}</span>
      </motion.h1>

      <motion.div
        className=" p-6 rounded-xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="drop-shadow-lg min-xl:w-4/7 min-xl:h-4/7 w-full h-full"
          />

          <div className="flex gap-2 justify-center">
            {types.map((type: string) => (
              <motion.span
                key={type}
                className="bg-pokemon-red text-pokemon-white px-3 py-1 rounded  rounded-full text-sm capitalize"
                whileHover={{ scale: 1.1 }}
              >
                {type}
              </motion.span>
            ))}
          </div>

          <p className="mt-4 italic text-zinc-700  text-center max-w-md">
            {description}
          </p>

          <motion.div
            className="grid grid-cols-2 gap-4 mt-6 text-sm text-center text-zinc-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <strong className="text-pokemon-red">Height:</strong>{" "}
              {height / 10} m
            </div>
            <div>
              <strong className="text-pokemon-red">Weight:</strong>{" "}
              {weight / 10} kg
            </div>
            <div className="col-span-2 ">
              <strong className="text-pokemon-red">Abilities:</strong>{" "}
              {abilities.join(", ")}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <SearchBar handleResults={(result) => setPokemonSearched(result)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- xl:grid-cols-2 gap-6 text-black">
        {!pokemonSearched?.id &&
          pokemons?.map((pokemon) => (
            <SecondaryCard key={pokemon.id} {...pokemon} />
          ))}
        {pokemonSearched?.id && <SecondaryCard {...pokemonSearched} />}
        {isLoading && (
          <>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ContentName;
