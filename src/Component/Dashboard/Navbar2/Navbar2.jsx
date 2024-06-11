import React from "react";
import { Link } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

import logo from "../../../Images/cryptocurrency.png";

export const Navbar2 = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-black bg-opacity-90">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="h-8" />
                    <h1 className="text-white text-lg font-semibold">
                        CryptoApp
                    </h1>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <NavbarLink text="Dashboard" link="/dashboard" />
                    <NavbarLink
                        text="Cryptocurrencies"
                        link="/dashboard/cryptocurrencies"
                    />
                    <NavbarLink text="Exchanges" link="/dashboard/exchanges" />
                    <NavbarLink text="News" link="/dashboard/news" />
                </div>
                <Link
                    to="/"
                    className="md:hidden text-white text-lg font-semibold"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};
