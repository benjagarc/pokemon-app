"use-client";

import { PokemonInterface } from "@/interfaces/pokemon";
import { motion } from "framer-motion";
import { FC, memo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const FavoriteButton = dynamic(
  () => import("@/components/atoms/FavoriteButton"),
  { ssr: false }
);

export const SecondaryCard: FC<PokemonInterface> = ({
  id,
  name,
  image,
  type,
  description,
  index,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    router.push(pathname === "/" ? "/pokemon" : `/pokemon/${name}`);
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
          <FavoriteButton
            id={id}
            name={name}
            image={image}
            type={type}
            description={description}
          />
        )}
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-32 h-32 mx-auto"
          priority={index ? index < 3 : false}
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

export default memo(SecondaryCard);
