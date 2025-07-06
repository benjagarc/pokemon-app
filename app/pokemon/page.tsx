import ContentPokemon from "./content";

interface Props {
  searchParams: { page?: string };
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon List | Pokédex App",
  description:
    "Browse all Pokémon from the official Pokédex. Discover their types, stats, and mark your favorites.",
  keywords: [
    "pokédex",
    "pokemon list",
    "all pokemon",
    "nextjs pokedex",
    "pokemon search",
    "pokemon collection",
    "react pokémon app",
  ],
  openGraph: {
    title: "All Pokémon | Pokédex App",
    description:
      "Explore every Pokémon in the Pokédex. View details, search by name, and manage your favorites.",
    // url: "https://poke-api.com/favorites",
    siteName: "Pokédex App",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "favicon.png"
  }
};

export default async function PokemonPage({ searchParams }: Props) {
  const { page } = await searchParams;

  return (
    <>
      <ContentPokemon currentPage={page ?? ""} />
      <h1>{page}</h1>
    </>
  );
}
