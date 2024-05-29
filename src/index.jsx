import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { App } from "./Component/App";
import { store } from "./Redux/store";

import "./style.css";

const rootElement = document.querySelector("#root");

if (!rootElement) {
    throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
