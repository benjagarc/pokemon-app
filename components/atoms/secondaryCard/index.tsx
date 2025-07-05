"use-client";

import { PokemonInterface } from "@/interfaces/pokemon";
import { useFavoritesStore } from "@/stores/favorite";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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

  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    router.push(pathname === "/" ? "/pokemon" : `/pokemon/${name}`);
  };
  const toggleFavorite = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isFav ? remove(id) : add({ id, name, image, type, description });
  };

  const handleFavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleFavorite();
  };
  return (
    <>
      <motion.div
        key={id}
        onClick={handleCardClick}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="bg-pokemon-glass rounded-xl p-4 shadow-lg text-center relative cursor-pointer"
      >
        {pathname !== "/" && (
          <motion.button
            onClick={(e) => handleFavClick(e)}
            className="absolute top-3 right-3 text-xl cursor-pointer"
            aria-label="Agregar a favoritos"
            whileTap={{ scale: 0.8 }}
            animate={{ scale: isFav ? 1.2 : 1, rotate: isFav ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isFav ? "❤️" : "🤍"}
          </motion.button>
        )}
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-32 h-32 mx-auto"
        />
        <h2 className="text-lg font-bold capitalize">{name}</h2>
        <p className="inline-block bg-pokemon-red text-white text-xs font-bold px-3 py-1 m-1 rounded-full shadow-md">
          #{String(id).padStart(4, "0")} • {type}
        </p>
        <p className="italic text-gray-700 text-xs mt-2 line-clamp-2">
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default SecondaryCard;
