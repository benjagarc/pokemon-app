export interface FavoritePokemon {
  id: number;
  name: string;
  image: string;
  type: string;
  description: string;
}

export interface FavoritesState {
  favorites: FavoritePokemon[];
  addFavorite: (pokemon: FavoritePokemon) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}
