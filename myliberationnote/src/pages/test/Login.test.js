import { render, screen, waitFor } from "@testing-library/react";
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
                    loginSuccess: null,
                    loginFailure: null,
                    loginLoading: false,
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
    it("closes Modal when clicking x button", async () => {
        RenderLoginPage();
        const question = screen.getByTestId("question");
        await user.click(question);
        const closeButton = await screen.findByTestId("button");
        await waitFor(() => {
            expect(closeButton).toBeInTheDocument();
        });
        await user.click(closeButton);
        await waitFor(() => {
            expect(closeButton).not.toBeInTheDocument();
        });
    });
    it("closes Modal when clicking outside space", async () => {
        RenderLoginPage();
        const question = screen.getByTestId("question");
        const outside = screen.getByTestId("outside");
        await user.click(question);
        const closeButton = await screen.findByTestId("button");
        await user.click(outside);
        await waitFor(() => {
            expect(closeButton).not.toBeInTheDocument();
        });
    });
});
