export interface PokemonInterface {
  description: string;
  genus?: string;
  id: number;
  image: string;
  name: string;
  type: string;
}

export interface LenguageInterface {
  language: {
    name: string;
  };
}
