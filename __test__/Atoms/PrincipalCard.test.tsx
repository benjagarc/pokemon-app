/* eslint-disable @next/next/no-img-element */
import { render, screen } from "@testing-library/react";
import PrincipalCard from "@/components/atoms/PrincipalCard";

// Mock para next/image
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, ...rest } = props;
    return <img {...rest} alt={props.alt} />;
  },
}));

describe("PrincipalCard", () => {
  const mockPokemon = {
    id: 25,
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "electric",
    description:
      "This intelligent Pokémon roasts hard berries with electricity.",
  };

  it("renders the pokemon name, type, and description", () => {
    render(<PrincipalCard {...mockPokemon} />);

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/#0025 • electric/i)).toBeInTheDocument();
    expect(screen.getByText(/roasts hard berries/i)).toBeInTheDocument();
  });

  it("renders the image with correct alt", () => {
    render(<PrincipalCard {...mockPokemon} />);
    const image = screen.getByAltText("pikachu");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("25.png"));
  });

  it("renders the 'Show more' link with correct href", () => {
    render(<PrincipalCard {...mockPokemon} />);
    const link = screen.getByRole("link", { name: /show more/i });
    expect(link).toHaveAttribute("href", "/pokemon/pikachu");
  });
});
