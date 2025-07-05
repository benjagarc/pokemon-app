import { getPokemonByName } from "@api/pokemon";
import { useQuery } from "@tanstack/react-query";

export const useSearchPokemon = (name: string) => {
  return useQuery({
    queryKey: ["search-pokemon", name.toLocaleLowerCase()],
    queryFn: () => getPokemonByName(name),
    enabled: !!name,
  });
};
