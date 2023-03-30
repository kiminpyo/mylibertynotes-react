import { render } from "@testing-library/react";
import Loader from "../Loader";

describe("render LoaderComponet", () => {
    it("shows '로딩 중..'in Loader", () => {
        const { container } = render(<Loader />);
        expect(container).toHaveTextContent("로딩 중..");
    });
});
