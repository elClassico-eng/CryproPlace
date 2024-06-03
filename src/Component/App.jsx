import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Navbar } from "./Dashboard/Navbar/Navbar";
import { HomePage } from "../Pages/Dashboard/HomePage";
import { Extanges } from "../Pages/Dashboard/Extanges";
import { CryptoDetails } from "../Pages/Dashboard/CryptoDetails";
import { Cryptocurrencies } from "../Pages/Dashboard/Cryptocurrencies";
import { News } from "../Pages/Dashboard/News";
import { Footer } from "./Dashboard/Footer/Footer";

export const App = () => {
    const location = useLocation();
    const isDashBoard = location.pathname.startsWith("/dashboard");

    return (
        <div className="flex w-full h-screen">
            {isDashBoard && <Navbar />}
            <div className="flex w-full h-screen flex-col ">
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/dashboard" element={<HomePage />}></Route>
                    <Route
                        path="/dashboard/cryptocurrencies"
                        element={<Cryptocurrencies />}
                    ></Route>
                    <Route
                        path="/dashboard/extanges"
                        element={<Extanges />}
                    ></Route>
                    <Route
                        path="/dashboard/crypto/:uuid"
                        element={<CryptoDetails />}
                    ></Route>
                    <Route path="/dashboard/news" element={<News />}></Route>
                </Routes>
                {isDashBoard && <Footer />}
            </div>
        </div>
    );
};
