"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GameCardProps } from "./interface";

export const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-pokemon-glass rounded-xl p-4 flex flex-col items-center shadow-lg text-center relative cursor-pointer w-full"
      >
        {/* Contenedor de la Pokébola más grande */}
        <div className="w-24 h-24 relative flex-shrink-0 mb-2">
          {" "}
          {/* Aumentado a w-24 h-24 y añadido margen inferior */}
          <Image
            src="/pokeball.png"
            alt="Pokébola"
            fill
            className="object-contain opacity-70"
          />
        </div>
        {/* El texto ya está en columna por defecto, pero lo mantenemos en su div */}
        <div className="flex flex-col items-center">
          {" "}
          {/* Centramos el texto también */}
          <h3 className="text-lg font-bold capitalize text-black">
            {game.name}
          </h3>
        </div>
      </motion.div>
    </>
  );
};

export default GameCard;
