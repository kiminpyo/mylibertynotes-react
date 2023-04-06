import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function renderAppFunction({ path }) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
    );
}
jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));
const mockedUsedNavigate = jest.fn();
const dispatch = jest.fn();

describe("routing pages not using redux", () => {
    beforeEach(() => {
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation((state) =>
            state({
                user: {
                    userInfo: null,
                    loginLoading: false,
                    loginSuccess: null,
                    loginFailure: null,
                    loadMeSuccess: false,
                    loadMeFailure: false,
                },
            })
        );
    });
    it("routes badRoute", () => {
        const badRoute = "/nopage";
        const { container } = renderAppFunction({ path: badRoute });

        // verify navigation to "no match" route
        expect(container).toHaveTextContent(/no match/);
    });

    it("routes MainPage", async () => {
        const { getByTestId } = renderAppFunction({ path: "/" });
        expect(getByTestId).toBeTruthy();
    });
    it("routes aboutPage", () => {
        const { container } = renderAppFunction({ path: "/intro" });
        expect(container).toHaveTextContent("INTRO");
    });
});
