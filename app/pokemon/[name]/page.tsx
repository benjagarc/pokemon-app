import { notFound } from "next/navigation";
import { getPokemonByName } from "@api/pokemon";
import ContentName from "./content";
import { Metadata } from "next";

interface Props {
  params: { name: string };
}

export default async function PokemonPage({ params }: Props) {
  const { name } = params;
  const pokemon = await getPokemonByName(name);

  if (!pokemon) return notFound();

  return <ContentName {...pokemon} />;
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const pokemon = await getPokemonByName(params.name);

  if (!pokemon) {
    return {
      title: "Pokémon not found",
      description: "No se encontró el Pokémon solicitado.",
    };
  }

  return {
    title: `#${pokemon.id} ${pokemon.name} | Pokédex App`,
    description: pokemon.description,
    openGraph: {
      title: `#${pokemon.id} ${pokemon.name} | Pokédex App`,
      description: pokemon.description,
      images: [
        {
          url: pokemon.image,
          width: 400,
          height: 400,
          alt: pokemon.name,
        },
      ],
    },
  };
}
