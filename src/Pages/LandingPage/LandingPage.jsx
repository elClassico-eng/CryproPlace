import React from "react";

import { Element } from "react-scroll";
import { ReactTyped } from "react-typed";

import { Title } from "../../Component/LandingPage/Title/Title";
import { Button } from "../../Component/LandingPage/Button/Button";
import { Navbar } from "../../Component/LandingPage/Navbar/Navbar";
import { CursorTrail } from "../../Component/LandingPage/CursorTrail/CursorTrail";
import { FutureCard } from "../../Component/LandingPage/FutureCard/FutureCard";

export const LandingPage = () => {
    return (
        <div className="">
            <div className="flex flex-col h-screen w-screen px-4  md:px-16 lg:px-32">
                <CursorTrail />
                <Navbar />
                <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 justify-center items-center w-full h-full text-center">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl uppercase leading-snug">
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
                    <Button bgColor="black" textColor="white" />
                </div>
            </div>
            <div className="flex flex-col items-center w-screen h-auto px-4  md:px-16 lg:px-32 bg-bgColor">
                <Title title="About" />
                <div className="flex flex-col mb-10 md:mb-15 lg:mb-20 leading-normal text-lg md:text-xl lg:text-2xl font-normal text-center uppercase">
                    <p className="mb-10 md:mb-15 lg:mb-20">
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
                            className="font-normal underline text-xl md:text-2xl lg:text-3xl"
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
                <div className="w-full border  border-black mb-10 md:mb-15 lg:mb-20"></div>
            </div>
            <div className="flex flex-col items-center w-screen h-auto px-4 md:px-16 lg:px-32 overflow-hidden  ">
                <Title title="Feature" />
                <FutureCard />
                <div className="w-full border  border-black mb-10 md:mb-15 lg:mb-20"></div>
            </div>
            <div className="flex p-5 items-center justify-between h-60 w-screen border-y border-black text-white bg-black px-4 md:px-16 lg:px-32">
                <h1 className="text-xl md:text-2xl lg:text-3xl uppercase">
                    Go to your dashboard now!
                </h1>
                <Button bgColor="white" textColor="black" />
            </div>
        </div>
    );
};
