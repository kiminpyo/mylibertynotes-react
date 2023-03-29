import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LibertyItem from "./LibertyItem";

import { USER } from "../../fixture/user";
import { POST } from "../../fixture/post";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
const mock = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mock,
}));
jest.mock("react-redux");
const user = userEvent.setup();
describe("render libertyItemComponent", () => {
    it("renders propsData", async () => {
        render(
            <MemoryRouter>
                <LibertyItem post={POST} userInfo={USER} />
            </MemoryRouter>
        );
        const testId = screen.getByTestId("click");
        await user.click(testId);
        expect(mock).toHaveBeenCalledWith("/liberty/1554");
    });
});
