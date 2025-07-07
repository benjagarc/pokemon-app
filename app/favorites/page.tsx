import type { Metadata } from "next";
import ContentFavorite from "./content";

export const metadata: Metadata = {
  title: "Favorites | Pokémon App",
  description: "Browse your favorite Pokémon saved in your custom Pokémon.",
  keywords: [
    "Pokémon",
    "favorite pokemon",
    "saved pokemon",
    "pokemon collection",
    "nextjs pokedex",
  ],
  openGraph: {
    title: "Your Favorite Pokémon",
    description:
      "Explore the Pokémon you've marked as favorites in your personal Pokémon.",
    url: "https://pokefronted.netlify.app/favorites",
    siteName: "Pokémon App",
    type: "website",
    images: [
      {
        url: "/pokemon-logo.png",
        width: 500,
        height: 180,
        alt: "Pokémon Explorer",
      },
    ],
  },
};
export default function FavoritesPage() {
  return (
    <>
      <ContentFavorite />
    </>
  );
}
