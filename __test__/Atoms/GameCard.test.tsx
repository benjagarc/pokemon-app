import { render, screen, fireEvent } from "@testing-library/react";
import GameCard from "@/components/atoms/GameCard";
import { useRouter, usePathname } from "next/navigation";

// 🧪 Mocks de Next
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// 🖼️ Mock para next/image
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} alt={rest.alt} />;
  },
}));

describe("GameCard", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  const mockGame = {
    name: "ruby",
    url: "https://pokeapi.co/api/v2/version/1",
  };

  it("renders the game card correctly", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<GameCard game={mockGame} index={0} />);
    expect(screen.getByText("ruby")).toBeInTheDocument();
    expect(screen.getByAltText(/pokébola/i)).toBeInTheDocument();
    expect(screen.getByText("Version")).toBeInTheDocument();
  });

  it("navigates to /games when clicked from outside /games path", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<GameCard game={mockGame} index={0} />);
    fireEvent.click(screen.getByText("ruby").closest("div")!);

    expect(mockPush).toHaveBeenCalledWith("/games");
  });

  it("does not navigate if already on /games", () => {
    (usePathname as jest.Mock).mockReturnValue("/games");

    render(<GameCard game={mockGame} index={0} />);
    fireEvent.click(screen.getByText("ruby").closest("div")!);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
