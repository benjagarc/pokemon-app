import ContentGames from "./content";

type params = Promise<{ page: string }>;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon Games | Pokémon App",
  description:
    "Explore the most iconic Pokémon game versions across generations. Browse through essential titles like Red, Blue, Gold, Sword & Shield, and more.",
  keywords: [
    "Pokémon games",
    "Pokémon versions",
    "Pokémon Red",
    "Pokémon Blue",
    "Sword and Shield",
    "Pokémon Essentials",
    "PokéAPI games",
  ],
  openGraph: {
    title: "Pokémon Games Essentials",
    description:
      "Discover key Pokémon games by generation. Explore classic and modern titles in this visual Pokémon experience.",
    url: "https://pokefronted.netlify.app/games",
    siteName: "Pokémon Explorer",
    locale: "en_US",
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
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Games",
    description:
      "Visual and interactive list of essential Pokémon games across all generations.",
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
      <ContentGames currentPage={page ?? ""} />
    </>
  );
}
