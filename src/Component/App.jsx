import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./Navbar/Navbar";
import { HomePage } from "../Pages/HomePage";
import { Extanges } from "../Pages/Extanges";
import { CryptoDetails } from "../Pages/CryptoDetails";
import { Cryptocurrencies } from "../Pages/Cryptocurrencies";
import { News } from "../Pages/News";

export const App = () => {
    return (
        <div className="flex w-full h-screen">
            <Navbar />
            <div className="flex w-full h-screen flex-col ">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route
                        path="/cryptocurrencies"
                        element={<Cryptocurrencies />}
                    ></Route>
                    <Route path="/extanges" element={<Extanges />}></Route>
                    <Route
                        path="/crypto/:coinId"
                        element={<CryptoDetails />}
                    ></Route>
                    <Route path="/news" element={<News />}></Route>
                </Routes>
                <div className="flex gap-2 flex-col bg-bgColor items-center p-4">
                    <h2 className="font-bold text-xl text-center text-textColor ">
                        CryptoPlace <br /> All right reserved
                    </h2>
                    <div className="flex gap-3 text-white">
                        <Link to="/">Home</Link>
                        <Link to="/extanges">Extanges</Link>
                        <Link to="/news">News</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
