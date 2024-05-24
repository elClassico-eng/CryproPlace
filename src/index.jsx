import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Component/App";
import "./style.css";

const rootElement = document.querySelector("#root");

if (!rootElement) {
    throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(<App />);
