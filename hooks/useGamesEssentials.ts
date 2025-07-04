import { getGamesEssentials } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export const useGamesEssentials = () => {
  return useQuery({
    queryKey: ["games-essentials"],
    queryFn: () => getGamesEssentials(),
    retry: 2,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });
};
