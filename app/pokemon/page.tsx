import ContentPokemon from "./content";

type params = Promise<{ page: string }>;
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
    url: "https://pokefronted.netlify.app/pokemon",
    siteName: "Pokédex App",
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
