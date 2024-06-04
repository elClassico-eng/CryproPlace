import React from "react";

import { Link } from "react-router-dom";

import { ReactTyped } from "react-typed";
import { CursorTrail } from "../../Component/LandingPage/CursorTrail/CursorTrail";
import { FutureCard } from "../../Component/LandingPage/FutureCard/FutureCard";

export const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-col h-screen w-screen px-32">
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
                    <h1 className="text-5xl text-center uppercase leading-snug">
                        Introductory cryptocurrency platform <br />
                        <ReactTyped
                            strings={["CryptoPlace"]}
                            typeSpeed={100}
                            backSpeed={60}
                            loop
                            backDelay={2000}
                            startWhenVisible={true}
                        />
                    </h1>
                    <Link to="/dashboard">
                        <button className="flex items-center justify-center w-[230px] h-[60px] bg-black rounded-full text-white">
                            Try now!
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center w-screen h-1/3 px-32">
                <div className="flex w-screen h-auto justify-center mb-20">
                    <h1 className="text-4xl font-bold uppercase">About </h1>
                </div>
                <div className="w-full border border-black mb-20"></div>
                <div className=" flex flex-col mb-20 leading-normal text-2xl font-normal text-center uppercase">
                    <p className="mb-20">
                        The fake company CryptoPlace collects data from various
                        <br />
                        API and presents them to the user in a convenient form
                        dashboard!
                        <br /> The application will be further developed, this
                        is the first test launch.
                    </p>
                    <p>
                        Technology stack used in this project:
                        <br />
                        <ReactTyped
                            className="font-normal underline text-3xl"
                            strings={[
                                "React",
                                "Redux Toolkit",
                                "RTK Query",
                                "Tailwind",
                            ]}
                            typeSpeed={60}
                            backSpeed={70}
                            fadeOut={true}
                            loop
                            backDelay={1000}
                            startWhenVisible={true}
                        />
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center h-full w-screen px-32">
                <div className="flex w-screen h-auto justify-center mb-20">
                    <h1 className="text-4xl font-bold uppercase">Futures</h1>
                </div>
                <div className="w-full border border-black  mb-20"></div>
                <FutureCard />
            </div>
        </div>
    );
};
