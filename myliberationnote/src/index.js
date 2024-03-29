import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/configureStore";
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
