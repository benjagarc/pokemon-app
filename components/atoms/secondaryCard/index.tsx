import { PokemonInterface } from "@/interfaces/pokemon";
import { useFavoritesStore } from "@/stores/favorite";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

export const SecondaryCard: FC<PokemonInterface> = ({
  id,
  name,
  image,
  type,
  description,
}) => {
  const isFav = useFavoritesStore((state) => state.isFavorite(id));
  const add = useFavoritesStore((state) => state.addFavorite);
  const remove = useFavoritesStore((state) => state.removeFavorite);

  const toggleFavorite = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isFav ? remove(id) : add({ id, name, image, type, description });
  };
  return (
    <>
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="glass border border-gray-200 rounded-xl p-4 shadow-md text-center relative"
      >
        <motion.button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 text-xl"
          aria-label="Agregar a favoritos"
          whileTap={{ scale: 0.8 }}
          animate={{ scale: isFav ? 1.2 : 1, rotate: isFav ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isFav ? "❤️" : "🤍"}
        </motion.button>
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-32 h-32 mx-auto"
        />
        <h2 className="text-xl font-bold capitalize">{name}</h2>
        <p className="text-gray-500 text-sm">
          #{String(id).padStart(4, "0")} • {type}
        </p>
        <p className="italic text-gray-700 text-sm mt-2 line-clamp-2">
          {description}
        </p>
        <Link
          href={`/pokemon/${name}`}
          className="inline-block mt-4 px-4 py-2 text-sm bg-yellow-400 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Ver más
        </Link>
      </motion.div>
    </>
  );
};

export default SecondaryCard;
