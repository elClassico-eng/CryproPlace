import React from "react";

import { Link } from "react-router-dom";

export const NavbarMenu = ({ title, link }) => {
    return (
        <div className=" gap-3 mb-4 transition-all hover:bg-bgColor  p-2">
            <Link to={link}>
                <div className="flex items-center gap-2 text-lg font-normal">
                    <h3 className=" text-white">{title}</h3>
                </div>
            </Link>
        </div>
    );
};
