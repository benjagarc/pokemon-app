import { PokemonInterface } from "@/interfaces/pokemon";

export interface SearchBarProps {
  handleResults: (results: PokemonInterface) => void;
}
