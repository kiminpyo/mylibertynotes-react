import { render, screen } from "@testing-library/react";
import MainContent from "../MainContent";
import { MemoryRouter, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
function MainContentComponent() {
    return render(
        <MemoryRouter>
            <MainContent />
        </MemoryRouter>
    );
}
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));
describe("render MainContent", () => {
    it("returne Component", () => {
        const { container } = MainContentComponent();
        expect(container).toBeInTheDocument();
    });

    it("returns title", () => {
        MainContentComponent();
        const ContentTitle = screen.getByTitle("mainTextTitle");
        expect(ContentTitle).toHaveTextContent("Today's feeling");
    });
    it("shows nothing at first with hidden content", () => {
        MainContentComponent();
        expect(screen.queryByTestId("mainTextConent")).toHaveStyle(
            "visibility:hidden"
        );
    });
    it("shows content which is hidden content by css animation", async () => {
        MainContentComponent(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );
        const textPicture = screen.getByTestId("mainTextPicture");
        await user.click(textPicture);
        expect(await screen.findByTestId("mainTextConent")).toHaveStyle(
            "visibility:visible"
        );
    });
    it("routes to libertyPage when click button", async () => {
        MainContentComponent(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );
        const mainContentButton = screen.getByTestId("mainContentButton");
        expect(mainContentButton).toHaveTextContent("가기");
        await user.click(mainContentButton);
        expect(mockNavigate).toBeCalledWith("/liberty");
    });
});
