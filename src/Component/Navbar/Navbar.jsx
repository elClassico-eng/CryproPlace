import React from "react";

import { Link } from "react-router-dom";

import { NavbarMenu } from "./NavbarMenu";

import avatar from "../../Images/cryptocurrency.png";

export const Navbar = () => {
    return (
        <div className="fixed  left-0  h-full bg-bgColor">
            <div className="flex p-5 mb-5 items-center w-full justify-center gap-3 text-textColor">
                <div className="flex gap-2 items-center">
                    <Link to="/">
                        <h1 className="text-4xl font-semibold">CryptoPlace</h1>
                    </Link>
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-[50px] h-[50px]"
                    />
                </div>
            </div>
            <div className="h-full ">
                <NavbarMenu title="Home" link="/" />
                <NavbarMenu title="Cryptocurrencies" link="/cryptocurrencies" />
                <NavbarMenu title="Exchanges" link="/exchanges" />
                <NavbarMenu title="News" link="/news" />
            </div>
        </div>
    );
};
