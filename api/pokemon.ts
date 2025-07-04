import { LenguageInterface } from "@/interfaces/pokemon";
import { api } from "@lib/axios";

export const getPokemonList = async () => {
  const { data } = await api.get("/pokemon?limit=15");
  const pokemons = await Promise.all(
    data.results.map(async (poke: { name: string }) => {
      const [pokemonRes, speciesRes] = await Promise.all([
        api.get(`/pokemon/${poke.name}`),
        api.get(`/pokemon-species/${poke.name}`),
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

  return pokemons;
};

export const getCharacterEssentials = async () => {
  const { data } = await api.get("/pokemon?limit=3");

  const pokemonEssentials = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const id = pokemon.url.split("/pokemon")[1].replace("/", "").trim();
      const { data } = await api.get(`/pokemon/${id}`);
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types[0].type.name,
        description: `${data.name} is a ${data.types[0].type.name}-type Pokémon.`,
      };
    })
  );

  return pokemonEssentials;
};

export const getGamesEssentials = async () => {
  const { data } = await api.get("/generation?limit=3");
  return data.results;
};


