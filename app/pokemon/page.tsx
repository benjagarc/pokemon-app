import ContentPokemon from "./content";

type params = Promise<{ page: string }>;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon List | Pokémon App",
  description:
    "Browse all Pokémon from the official Pokémon. Discover their types, stats, and mark your favorites.",
  keywords: [
    "Pokémon",
    "pokemon list",
    "all pokemon",
    "nextjs pokedex",
    "pokemon search",
    "pokemon collection",
    "react pokémon app",
  ],
  openGraph: {
    title: "All Pokémon | Pokémon App",
    description:
      "Explore every Pokémon in the Pokémon. View details, search by name, and manage your favorites.",
    url: "https://pokefronted.netlify.app/pokemon",
    siteName: "Pokémon App",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function PokemonPage({
  searchParams,
}: {
  searchParams: params;
}) {
  const { page } = await searchParams;

  return (
    <>
      <ContentPokemon currentPage={page ?? ""} />
    </>
  );
}
