import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageContainer from "../PageContainer";
function RenderPageContainer({ children, loading, failure }) {
    return render(
        <MemoryRouter initialEntries={["/"]}>
            <PageContainer
                children={children}
                failure={failure}
                loading={loading}
            />
        </MemoryRouter>
    );
}

describe("rendering PageContainer", () => {
    it("shows Nomatch when writing bad Routes", () => {
        const options = {
            children: null,
            failure: true,
            loading: false,
        };
        const { container } = RenderPageContainer(options);
        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent("존재하지 않는 게시글입니다.");
    });
    it("shows loader when failed axios", () => {
        const options = {
            children: null,
            failure: true,
            loading: true,
        };
        const { container } = RenderPageContainer(options);
        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent("로딩 중..");
    });
});
