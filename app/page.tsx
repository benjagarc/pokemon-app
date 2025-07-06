import { getPaginatedPokemons } from "@/api/pokemon";
import Home from "@/components/pages/Home";

export default async function HomePage() {
  const { pokemons } = await getPaginatedPokemons(15, 0);
  return (
    <>
      <Home pokemonList={pokemons} />
    </>
  );
}
