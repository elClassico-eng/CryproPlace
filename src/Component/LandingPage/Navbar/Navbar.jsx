import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-center pt-7">
            <ul className="flex gap-4 md:gap-6 lg:gap-9 list-none text-sm md:text-md cursor-pointer">
                <Scroll to="About" smooth={true} duration={500}>
                    <li>About</li>
                </Scroll>
                <Scroll to="Feature" smooth={true} duration={500}>
                    <li>Feature</li>
                </Scroll>
                <Link to="/dashboard">
                    <li>Dashboard</li>
                </Link>
            </ul>
        </div>
    );
};
