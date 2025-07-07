import { render, screen } from "@testing-library/react";
import Breadcrumb from "@/components/atoms/BreadCrumb";

// 🧪 Mock `next/navigation` para simular rutas
jest.mock("next/navigation", () => ({
  usePathname: () => "/pokemon/bulbasaur",
}));

// 🧪 Mock básico para lucide-react (íconos)
jest.mock("lucide-react", () => ({
  ChevronRight: () => <span data-testid="chevron">›</span>,
}));

describe("Breadcrumb", () => {
  it("renders Home link and path segments", () => {
    render(<Breadcrumb />);

    // "Home" always visible
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Segment links from mocked pathname
    expect(screen.getByText("pokemon")).toBeInTheDocument();
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();

    // Check that last segment has highlight class
    const lastSegment = screen.getByText("bulbasaur");
    expect(lastSegment).toHaveClass("text-yellow-300");
  });

  it("renders the correct number of chevrons", () => {
    render(<Breadcrumb />);
    const chevrons = screen.getAllByTestId("chevron");
    expect(chevrons.length).toBe(2); // one per segment
  });

  it("links point to correct URLs", () => {
    render(<Breadcrumb />);

    expect(screen.getByText("pokemon").closest("a")).toHaveAttribute(
      "href",
      "/pokemon"
    );
    expect(screen.getByText("bulbasaur").closest("a")).toHaveAttribute(
      "href",
      "/pokemon/bulbasaur"
    );
  });
});
