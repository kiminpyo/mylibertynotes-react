import { Provider, useDispatch, useSelector } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router-dom";
import UpperSide from "./UpperSide";
import { render, screen, waitFor } from "@testing-library/react";
import { LOG_OUT } from "../../reducers/user";
import App from "../../App";
import userEvent from "@testing-library/user-event/";
jest.mock("react-redux");
const mockNavigate = jest.fn();

const dispatch = jest.fn();
const user = userEvent.setup();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));
beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
        selector({
            user: {
                userInfo: {
                    email: "devKim@naevr.com",
                },
            },
        })
    );
});

test("calls dispatch and navigates to home page when logging out", async () => {
    const userInfo = {
        email: "rladlsvy@naver.com",
    };

    const { container } = render(
        <MemoryRouter>
            <UpperSide userInfo={userInfo} />
        </MemoryRouter>
    );
    expect(container).toHaveTextContent("logout");
    user.click(screen.getByText("logout"));
    await waitFor(() => {
        expect(mockNavigate).toBeCalledWith("/");
    });
});
