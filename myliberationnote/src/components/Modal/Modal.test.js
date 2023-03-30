import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("render Modal", () => {
    it("shows Modal", () => {
        const { container, queryByRole } = render(<Modal />);
        expect(container).toHaveTextContent("제1조");
        expect(container).toHaveTextContent("공지사항");
        expect(container).toHaveTextContent("나의 해방일지");
    });
    it("shows close Button in Modal", () => {
        render(<Modal />);
        const closeButton = screen.getByText("닫기");
        expect(closeButton).toBeInTheDocument();
    });
});
