import {
  abilityInterface,
  LenguageInterface,
  typesPokemonInterface,
} from "@/interfaces/pokemon";
import { api } from "@lib/axios";

export const getGamesEssentials = async (limit: number, offset?: number) => {
  const { data } = await api.get(
    `/version?limit=${limit}${offset ? `&offset=${offset}` : ""}`.trim()
  );
  return { games: data.results, count: data.count };
};

export const getPaginatedPokemons = async (limit: number, offset: number) => {
  const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await Promise.all(
    data.results.map(async (poke: { name: string }) => {
      const [pokemonRes] = await Promise.all([
        api.get(`/pokemon/${poke.name}`),
      ]);

      const [speciesRes] = await Promise.all([
        api.get(`${pokemonRes.data.species.url.split("v2/")[1]}`),
      ]);

      const pokemon = pokemonRes.data;
      const species = speciesRes.data;

      const description =
        species.flavor_text_entries
          .find((entry: LenguageInterface) => entry.language.name === "en")
          ?.flavor_text?.replace(/\f|\n/g, " ") ?? "No description available.";

      const genus =
        species.genera.find(
          (entry: LenguageInterface) => entry.language.name === "en"
        )?.genus ?? "Pokémon";

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default,
        type: pokemon.types[0].type.name,
        genus,
        description,
      };
    })
  );

  return {
    pokemons,
    next: data.next,
    previous: data.previous,
    count: data.count,
  };
};

export const getPokemonByName = async (name: string) => {
  const { data } = await api.get(`/pokemon/${name}`);
  const url = data.species.url.split("v2/")[1];
  const { data: dataSpecies } = await api.get(`${url}`);

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    type: data.types[0].type.name,
    abilities: data.abilities.map((a: abilityInterface) => a.ability.name),
    description:
      dataSpecies.flavor_text_entries
        .find((entry: LenguageInterface) => entry.language.name === "en")
        ?.flavor_text?.replace(/\f|\n/g, " ") ?? "No description available.",
    types: data.types.map((t: typesPokemonInterface) => t.type.name),
    height: data.height,
    weight: data.weight,
  };
};
