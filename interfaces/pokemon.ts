export interface PokemonInterface {
  description: string;
  genus?: string;
  id: number;
  image: string;
  name: string;
  type: string;
  index?: number;
}

export interface PopkemonDetailInterface extends PokemonInterface {
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
}

export interface LenguageInterface {
  language: {
    name: string;
  };
}

export interface abilityInterface {
  ability: {
    name: string;
  };
}

export interface typesPokemonInterface {
  type: {
    name: string;
  };
}
