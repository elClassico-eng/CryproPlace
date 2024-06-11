import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ textColor }) => {
    return (
        <Link to="/dashboard">
            <button
                className={`flex items-center font-bold justify-center w-[180px] md:w-[200px] lg:w-[230px] h-[50px] md:h-[55px] lg:h-[60px] bg-white rounded-full text-${textColor} hover:opacity-90 hover:shadow hover:shadow-white`}
            >
                Try now!
            </button>
        </Link>
    );
};
