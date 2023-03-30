import { render } from "@testing-library/react";
import Button from "../Button";
function buttonComponent(text) {
    return render(<Button text={text} />);
}
describe("render ButtonComponent", () => {
    it("shows innerText in ButtonbuttonComponent", () => {
        const text = "buttonText";
        const { container } = buttonComponent(text);
        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent(text);
    });
});
