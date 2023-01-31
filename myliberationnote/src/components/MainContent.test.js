import { render, screen } from "@testing-library/react";

import MainContent from "./MainContent";

test("FD", () => {
    render(<MainContent />);
    expect(screen.getByText(/hi/i)).toBeInTheDocument();
});
