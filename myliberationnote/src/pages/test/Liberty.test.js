import { useSelector, useDispatch } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LibertyItemContainer from "../../components/Liberty/LiberyItemContainer";
import { POSTS, posts } from "../../fixture/posts";
describe("render LibertyPage", () => {
    jest.mock("react-redux");
    beforeEach(() => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation((state) =>
            state({
                user: {
                    userInfo: {
                        id: 27,
                        email: "r@123.com",
                        nickname: null,
                        gender: null,
                    },
                },
            })
        );
    });
    it("dispatches post", () => {
        const { container } = render(
            <MemoryRouter>
                <LibertyItemContainer posts={POSTS} />
            </MemoryRouter>
        );
        expect(container).toHaveTextContent("123@123.com");
    });
});
