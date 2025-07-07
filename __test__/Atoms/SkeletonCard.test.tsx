import { render, screen } from "@testing-library/react"; 
import SkeletonCard from "@/components/atoms/SkeletonCard";

describe("SkeletonCard", () => {
  it("renders without crashing", () => {
    render(<SkeletonCard />);
    const skeleton = screen.getByRole("region", { hidden: true });
    expect(skeleton).toBeInTheDocument();
  });

  it("renders 5 placeholder elements", () => {
    render(<SkeletonCard />);
    const placeholders = screen
      .getByTestId("skeleton-container")
      .querySelectorAll("div"); 
    expect(placeholders.length).toBe(5);
  });
});
