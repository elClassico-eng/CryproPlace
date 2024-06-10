import React from "react";

import Link from "antd/es/typography/Link";

import { Element } from "react-scroll";
import { ReactTyped } from "react-typed";

import { Title } from "../../Component/LandingPage/Title/Title";
import { Button } from "../../Component/LandingPage/Button/Button";
import { Navbar } from "../../Component/LandingPage/Navbar/Navbar";
import { CursorTrail } from "../../Component/LandingPage/CursorTrail/CursorTrail";
import { FutureCard } from "../../Component/LandingPage/FutureCard/FutureCard";

import vklink from "../../Images/Icons/Socials/vk.png";
import tglink from "../../Images/Icons/Socials/telegram.png";

export const LandingPage = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col h-screen w-screen px-4 text-white  md:px-16 lg:px-32 bg-bgColor">
                <CursorTrail />
                <Navbar />
                <div className="flex  flex-col gap-10 md:gap-20 lg:gap-28 justify-center items-center w-full h-full text-center">
                    <h1 className="text-3xl font-normal md:text-4xl lg:text-5xl leading-snug">
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
                    <Button bgColor="white" textColor="black" />
                </div>
            </div>
            <div className="flex w-screen h-auto px-4  md:px-16 lg:px-32 ">
                <Title title="About" />
                <div className="flex flex-col items-center justify-center gap-4 md:mb-15 lg:mb-20 leading-normal text-lg md:text-xl lg:text-2xl font-normal text-center mt-10">
                    <p>
                        Welcome to the fake company CryptoPlace. <br />
                        The application allows you to plunge into the world of
                        cryptocurrency
                    </p>
                    <p>
                        The application is under development. If you have
                        functionality requests, here are my social networks
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center w-screen h-auto px-4 mb-10  md:px-16 lg:px-32 font-normal text-lg md:text-xl lg:text-2xl text-center">
                <Title title="Stack used in this project" justify={true} />

                <p>
                    <ReactTyped
                        className="font-normal text-2xl md:text-2xl lg:text-3xl"
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
            <div className="flex p-5 items-center justify-between h-60 w-screen border-y bg-bgColor text-white rounded-full border-gray-300 px-4 md:px-16 lg:px-32">
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                    Go to your dashboard now!
                </h1>
                <Button bgColor="white" textColor="black" />
            </div>
            <div className="flex flex-col items-center w-screen h-auto px-4 md:px-16 lg:px-32 overflow-hidden  ">
                <Title title="Feature" justify={true} />
                <FutureCard />
            </div>
            <Title title="Contacts" justify={true} />
            <div className="flex h-auto w-screen items-center justify-center px-4 md:px-16 lg:px-32 mb-3">
                <div className="flex items-center gap-5 justify-center">
                    <a href="">
                        <img src={vklink} alt="VK" />
                    </a>
                    <a href="">
                        <img src={tglink} alt="TG" />
                    </a>
                </div>
            </div>
        </div>
    );
};
