import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SecondaryCard from "@/components/atoms/secondaryCard";
import { usePathname, useRouter } from "next/navigation";

// Mock next/route & next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// // Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock FavoriteButton
jest.mock("@/components/atoms/FavoriteButton", () => ({
  __esModule: true,
  default: () => <button data-testid="favorite-button">♥</button>,
}));

describe("SecondaryCard", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue("/pokemon");
  });

  const mockPokemon = {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
    description: "A strange seed was planted on its back at birth.",
    index: 0,
  };

  it("renders the Pokemon card with correct content", async () => {
    render(<SecondaryCard {...mockPokemon} />);

    await waitFor(() => expect(screen.getByRole("button")).toBeInTheDocument());

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByAltText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/#0001 • grass/i)).toBeInTheDocument();
    expect(screen.getByText(/A strange seed/i)).toBeInTheDocument();
    expect(screen.getByTestId("favorite-button")).toBeInTheDocument();
  });

  it("navigates to detail page on click", () => {
    render(<SecondaryCard {...mockPokemon} />);
    const card = screen.getByText(/bulbasaur/i).closest("div");
    fireEvent.click(card!);

    expect(mockPush).toHaveBeenCalledWith("/pokemon/bulbasaur");
  });
});
