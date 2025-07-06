import { getGamesEssentials } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export const useGamesEssentials = (limit: number, offset?: number) => {
  return useQuery({
    queryKey: ["games-essentials", limit, offset],
    queryFn: () => getGamesEssentials(limit, offset),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });
};
