import { PokemonInterface } from "@/interfaces/pokemon";
import { useFavoritesStore } from "@/stores/favorite";
import { motion } from "framer-motion";
import { FC } from "react";

export const FavoriteButton: FC<PokemonInterface> = ({
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

  const handleFavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleFavorite();
  };
  return (
    <>
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
    </>
  );
};

export default FavoriteButton;
