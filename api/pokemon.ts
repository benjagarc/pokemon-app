import { api } from "@lib/axios";

export const getPokemonList = async () => {
  const { data } = await api.get("/pokemon?limit=10&offset=0");
  return data;
};
