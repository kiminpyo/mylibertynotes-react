import { render, screen } from "@testing-library/react";
import Introduce from "../Introduce";

describe("IntroduceComponent", () => {
    it("returns component", () => {
        const { container } = render(<Introduce />);
        expect(container).toBeInTheDocument();
    });
    it("returns title", () => {
        render(<Introduce />);
        const title = screen.getByTitle("intro");
        expect(title).toHaveTextContent("INTRO");
    });
    it("returns Content", () => {
        render(<Introduce />);
        const title = screen.getByTestId("introContent");
        expect(title).toHaveTextContent(
            /살면서 마음이 정말로 편하고 좋았던 적이 얼마나 있었나?/i
        );
    });
});
