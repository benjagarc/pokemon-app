import { getPaginatedPokemons } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export const usePokemonList = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["pokemon-list", limit, offset],
    queryFn: () => getPaginatedPokemons(limit, offset),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });
};
