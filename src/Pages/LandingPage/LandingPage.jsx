import React from "react";

import { Link } from "react-router-dom";

import { CursorTrail } from "../../Component/LandingPage/CursorTrail/CursorTrail";

export const LandingPage = () => {
    return (
        <div className="flex flex-col h-full w-screen px-32">
            <CursorTrail />
            <div className="flex items-center justify-center pt-7">
                <div>
                    <ul className="flex gap-9 list-none text-lg cursor-pointer">
                        <li>About</li>
                        <li>Feature</li>
                        <li>Reviews</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-28 justify-center items-center w-full h-full">
                <h1 className="text-5xl text-center leading-snug">
                    Introductory cryptocurrency platform <br /> CryptoPlace
                </h1>
                <Link to="/dashboard">
                    <button className="flex items-center justify-center w-[230px] h-[60px] bg-black rounded-full text-white">
                        Try now!
                    </button>
                </Link>
            </div>
        </div>
    );
};
