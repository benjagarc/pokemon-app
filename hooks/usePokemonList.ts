import { getPokemonList } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export const usePokemonList = () => {
  return useQuery({
    queryKey: ["pokemon-list"],
    queryFn: () => getPokemonList(),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });
};
