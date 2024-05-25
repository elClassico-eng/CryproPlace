import React from "react";

import { Navbar } from "./Navbar/Navbar";

export const App = () => {
    return (
        <div className="flex  overflow-hidden">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main"></div>
            <div className="footer"></div>
        </div>
    );
};
