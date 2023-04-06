import { Provider, useDispatch, useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import UpperSide from "../UpperSide";
import { render, screen } from "@testing-library/react";

function UpperSideRender() {
    return render(
        <MemoryRouter>
            <UpperSide />
        </MemoryRouter>
    );
}
jest.mock("react-redux");
const mockNavigate = jest.fn();
const dispatch = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));
describe("render Upperside", () => {
    beforeEach(() => {
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation((state) =>
            state({
                user: {
                    userInfo: null,
                },
            })
        );
    });
    it("returns component", () => {
        const { container } = UpperSideRender();

        expect(container).toBeInTheDocument();
    });
    it("retunrs login button", async () => {
        const { container } = UpperSideRender();
        expect(container).toHaveTextContent(/login/i);
        const login = screen.getByTestId("login");
        expect(login).toBeInTheDocument();
    });
    it("returns no login button", async () => {
        useSelector.mockImplementation((state) =>
            state({
                user: {
                    userInfo: {
                        id: 27,
                        email: "devkim@123.com",
                        nickname: null,
                        gender: null,
                        thumbnail: null,
                        createdAt: "2023-01-11T06:43:01.000Z",
                        updatedAt: "2023-01-11T06:43:01.000Z",
                    },
                },
            })
        );
        UpperSideRender();
        expect(screen.queryByTestId("login")).not.toBeInTheDocument();
    });
});
