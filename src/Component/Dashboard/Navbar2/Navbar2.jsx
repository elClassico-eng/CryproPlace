import React from "react";

import { Link } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

import logo from "../../../Images/cryptocurrency.png";
import { ReactComponent as DarkThemeIcon } from "../../../Images/Icons/theme_light_dark_icon_137104.svg";

export const Navbar2 = () => {
    return (
        <div className="flex justify-center items-center fixed bottom-10 h-20 w-screen  z-10">
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex items-center gap-2 justify-between h-full w-1/2 z-20 bg-black opacity-90 overflow-hidden rounded-md p-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-full w-auto object-cover"
                    />
                    <div className="flex items-center justify-between rounded-md bg-bgColorNavbar h-full w-full p-3 text-white cursor-pointer">
                        <NavbarLink text="Dashboard" link="/dashboard" />
                        <NavbarLink
                            text="Cryptocurrencies"
                            link="/dashboard/cryptocurrencies"
                        />
                        <NavbarLink
                            text="Exchanges"
                            link="/dashboard/exchanges"
                        />
                        <NavbarLink text="News" link="/dashboard/news" />
                    </div>
                    <Link to="/">
                        <div className="bg-bgColor flex items-center justify-center text-white h-full w-auto p-5 rounded-md hover:opacity-80">
                            <h2 className="text-lg font-bold">Home</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

/**
 
    <div className="fixed bottom-28 z-30 left-20 w-1/2 h-36 bg-black opacity-50">
            <div className="flex bg-gray-400">
                <div className="flex items-center justify-center border border-white">
                    <h3>Home</h3>
                </div>
                <div className="flex items-center justify-center border border-white">
                    <h3>Home</h3>
                </div>
                <div className="flex items-center justify-center border border-white">
                    <h3>Home</h3>
                </div>
                <div className="flex items-center justify-center border border-white">
                    <h3>Home</h3>
                </div>
                <div className="flex items-center justify-center border border-white">
                    <h3>Home</h3>
                </div>
            </div>
        </div>

 */
