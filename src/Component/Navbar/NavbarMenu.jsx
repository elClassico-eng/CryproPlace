import React from "react";

import { Link } from "react-router-dom";

import home from "../../Images/Icons/home.png";

export const NavbarMenu = ({ title, link }) => {
    return (
        <div className="ml-5 gap-3 mb-4 hover:bg-bgSecondary p-2">
            <Link to={link}>
                <div className="flex items-center gap-2 text-lg font-normal">
                    <img src={home} alt="Home" className="h-[20px] w-[20px]" />
                    <h3 className=" text-textColor">{title}</h3>
                </div>
            </Link>
        </div>
    );
};
