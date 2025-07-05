import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoritesState } from "./interface";

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (pokemon) =>
        set((state) => {
          if (state.favorites.find((p) => p.id === pokemon.id)) return state;
          return { favorites: [...state.favorites, pokemon] };
        }),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== id),
        })),
      isFavorite: (id) =>
        !!get().favorites.find((pokemon) => pokemon.id === id),
    }),
    {
      name: "favorites-pokemons",
    }
  )
);
