import { render, screen } from "@testing-library/react";
import NoMatch from "../NoMatch";
import { MemoryRouter } from "react-router-dom";
import UserEvent from "@testing-library/user-event/";
const user = UserEvent.setup();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));
describe("Nomatchpage", () => {
    it("renders nomatch", () => {
        const { container } = render(
            <MemoryRouter>
                <NoMatch />
            </MemoryRouter>
        );
        expect(container).toBeInTheDocument();
    });
    it("returns 돌아가기 when click button", async () => {
        render(
            <MemoryRouter>
                <NoMatch />
            </MemoryRouter>
        );
        const button = screen.getByRole("button", { name: "돌아가기" });
        expect(button).toBeInTheDocument();
        await user.click(button);
        expect(mockNavigate).toBeCalledWith(-1)

    });
});
