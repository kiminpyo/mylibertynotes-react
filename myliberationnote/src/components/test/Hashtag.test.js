import { render, screen, waitFor } from "@testing-library/react";
import Hashtag from "../Hashtag";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
const mockNavi = jest.fn();
const mockuseParams = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavi,
    useParams: () => mockuseParams,
}));
describe("Hashtag", () => {
    it("return HashtagComponent", () => {
        const name = "리액트";
        const { container } = render(
            <MemoryRouter>
                <Hashtag name={name} />
            </MemoryRouter>
        );
        expect(container).toHaveTextContent("리액트");
    });
    it("routes to keyword", async () => {
        const name = "리액트";
        const state = {
            state: undefined,
        };
        render(
            <MemoryRouter>
                <Hashtag name={name} />
            </MemoryRouter>
        );

      
        const hashtagWrap = screen.getByTestId("hashtag");
        expect(hashtagWrap).toBeInTheDocument();
        user.click(hashtagWrap);
        await waitFor(() => {
            expect(mockNavi).toBeCalledWith(`/liberty/search/${name}`, state);
        });
    });
});
