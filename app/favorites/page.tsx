import type { Metadata } from "next";
import ContentFavorite from "./content";

export const metadata: Metadata = {
  title: "Favorites | Pokédex App",
  description: "Browse your favorite Pokémon saved in your custom Pokédex.",
  keywords: [
    "pokédex",
    "favorite pokemon",
    "saved pokemon",
    "pokemon collection",
    "nextjs pokedex",
  ],
  openGraph: {
    title: "Your Favorite Pokémon",
    description:
      "Explore the Pokémon you've marked as favorites in your personal Pokédex.",
    url: "https://pokefronted.netlify.app/favorites",
    siteName: "Pokédex App",
    type: "website",
  },
};
export default function FavoritesPage() {
  return (
    <>
      <ContentFavorite />
    </>
  );
}
