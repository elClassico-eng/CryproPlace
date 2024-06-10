import React from "react";

import { Link } from "react-router-dom";

export const NavbarLink = ({ text, link }) => {
    return (
        <Link to={link}>
            <div className="flex justify-center items-center h-full w-full border border-gray-600 bg-transporent py-2 px-4 rounded-md hover:border-white transition-all">
                <h3 className="text-base font-light">{text}</h3>
            </div>
        </Link>
    );
};
