import { PokemonInterface } from "@/interfaces/pokemon";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

export const PokemonCard: FC<PokemonInterface> = ({
  id,
  name,
  image,
  type,
  description,
}) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="glass rounded-xl p-4 w-100%  text-center text-black flex max-sm:flex-wrap max-sm:pb-7"
      >
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-contain mx-auto mb-2 drop-shadow-lg"
        />
        <div className="flex flex-col justify-center p-2">
          <h3 className="text-2xl font-bold capitalize">{name}</h3>
          <h4 className="text-lg font-semibold text-pokemon-red mb-1">
            #{String(id).padStart(4, "0")} ° {type}
          </h4>
          <p className="text-sm text-zinc-700 italic line-clamp-3 mb-3">
            {description}
          </p>

          <Link
            href={`/pokemon/${name}`}
            className="inline-block bg-pokemon-yellow text-pokemon-black text-xs px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Show more
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default PokemonCard;
