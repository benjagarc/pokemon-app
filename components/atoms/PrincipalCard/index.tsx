import { PokemonInterface } from "@/interfaces/pokemon";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, memo } from "react";
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
          className="min-xl:w-5/6 min-xl:h-5/6 w-full h-full object-contain mx-auto mb-2 drop-shadow-lg"
          priority
        />
        <div className="flex flex-col justify-center p-2 sm:text-left text-center gap-2">
          <h3 className="text-3xl max-sm:text-2xl font-extrabold capitalize text-pokemon-text drop-shadow-sm break-words">
            {name}
          </h3>

          <p className="inline-block bg-pokemon-red text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mx-auto sm:mx-0">
            #{String(id).padStart(4, "0")} • {type}
          </p>

          <p className="text-sm text-zinc-700 italic line-clamp-4 leading-relaxed max-sm:line-clamp-2">
            {description}
          </p>

          <Link
            href={`/pokemon/${name}`}
            className="inline-block self-start max-sm:self-center w-fit bg-pokemon-yellow text-pokemon-black text-xs px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Show more
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default memo(PokemonCard);
