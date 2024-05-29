import React from "react";

import { Link } from "react-router-dom";

import { NavbarMenu } from "./NavbarMenu";

import avatar from "../../Images/cryptocurrency.png";

export const Navbar = () => {
    return (
        <div className="flex flex-col fixed  w-1/5 z-10 h-screen bg-bgColor p-4">
            <div className="flex  h-1/4 w-full justify-between">
                <Link to="/">
                    <h1 className="text-4xl font-semibold">CryptoPlace</h1>
                </Link>
                <img src={avatar} alt="Avatar" className="w-[50px] h-[50px]" />
            </div>
            <div className="flex h-full w-full flex-col justify-center">
                <NavbarMenu title="Home" link="/" />
                <NavbarMenu title="Cryptocurrencies" link="/cryptocurrencies" />
                <NavbarMenu title="Exchanges" link="/exchanges" />
                <NavbarMenu title="News" link="/news" />
            </div>
        </div>
    );
};
