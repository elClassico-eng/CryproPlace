import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="flex gap-2 flex-col bg-black items-center p-4 text-white">
            <h2 className="font-bold text-xl text-center  ">
                CryptoPlace <br /> All right reserved
            </h2>
            <div className="flex gap-3 ">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/extanges">Extanges</Link>
                <Link to="/dashboard/news">News</Link>
            </div>
        </div>
    );
};
