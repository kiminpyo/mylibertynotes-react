import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

function renderAppFunction({ path }) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>
    );
}
const mockedUsedNavigate = jest.fn();
jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));
describe("routing pages not using redux", () => {
    beforeAll(() => {
        const dispatch = jest.fn();
        const useDispatch = jest.fn();
        const useSelector = jest.fn();
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation((state) =>
            state({
                post: [{ id: 1 }],
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
