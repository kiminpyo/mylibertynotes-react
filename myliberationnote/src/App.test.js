import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    expect(screen.getByText(/hihihi/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
    const badRoute = "/nopage";

    // use <MemoryRouter> when you want to manually control the history
    render(
        <MemoryRouter initialEntries={[badRoute]}>
            <App />
        </MemoryRouter>
    );

    // verify navigation to "no match" route
    expect(screen.getByText(/nomatch/i)).toBeInTheDocument();
});
