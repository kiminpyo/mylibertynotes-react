import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "../Login";
function RenderLoginPage() {
    return render(
        <MemoryRouter initialEntries={["/login"]}>
            <Login />
        </MemoryRouter>
    );
}
const user = userEvent.setup();

describe("rendering LoginPage", () => {
    jest.mock("react-redux");
    const dispatch = jest.fn;

    beforeEach(() => {
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation((selector) =>
            selector({
                user: {
                    userInfo: {
                        id: 1,
                        name: "devkim",
                    },
                },
            })
        );
    });
    it("render Page without Modal", () => {
        const { container } = RenderLoginPage();
        expect(container).toHaveTextContent("Log In");
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    });
    it("shows Modal when clicking policy question Mark", async () => {
        RenderLoginPage();
        const question = screen.getByTestId("question");
        await user.click(question);
        const modal = screen.getByTestId("modal");
        expect(modal).toBeInTheDocument();
    });
});
