import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { HomePage } from "../Pages/Dashboard/HomePage";
import { Exchanges } from "../Pages/Dashboard/Exchanges";
import { CryptoDetails } from "../Pages/Dashboard/CryptoDetails";
import { Cryptocurrencies } from "../Pages/Dashboard/Cryptocurrencies";
import { News } from "../Pages/Dashboard/News";
import { Footer } from "./Dashboard/Footer/Footer";
import { Navbar2 } from "./Dashboard/Navbar2/Navbar2";

export const App = () => {
    const location = useLocation();
    const isDashBoard = location.pathname.startsWith("/dashboard");

    return (
        <div className="w-full h-screen">
            {isDashBoard && <Navbar2 />}
            <div className="flex w-full h-screen flex-col ">
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/dashboard" element={<HomePage />}></Route>
                    <Route
                        path="/dashboard/cryptocurrencies"
                        element={<Cryptocurrencies />}
                    ></Route>
                    <Route
                        path="/dashboard/exchanges"
                        element={<Exchanges />}
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
