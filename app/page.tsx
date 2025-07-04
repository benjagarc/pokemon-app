import { getPokemonList } from "@/api/pokemon";
import Home from "@/components/pages/Home";
export default async function HomePage() {
  const pokemonList = await getPokemonList();
  return (
    <>
      <Home pokemonList={pokemonList}/>
    </>
  );
}
 