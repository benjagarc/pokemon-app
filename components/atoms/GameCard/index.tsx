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
        className="bg-pokemon-glass rounded-xl p-4 flex flex-col items-center shadow-xl text-center relative cursor-pointer w-full"
      >
        <div className="w-50 h-20 relative flex-shrink-0 mb-2">
          {" "}
          <Image
            src="/pokemon-logo.png"
            alt="Pokébola"
            fill
            className="object-contain opacity-800"
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold capitalize text-black">
            {game.name}
          </h3>
          <p className="text-sm text-zinc-700">Version</p>
        </div>
      </motion.div>
    </>
  );
};

export default GameCard;
