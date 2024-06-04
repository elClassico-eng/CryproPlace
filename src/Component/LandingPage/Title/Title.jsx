import React from "react";
import { Element } from "react-scroll";

export const Title = ({ title }) => {
    return (
        <>
            <div className="flex w-full justify-center mt-20 mb-10 md:mb-15 lg:mb-20">
                <Element name={`${title}`}>
                    <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold uppercase">
                        {title}
                    </h1>
                </Element>
            </div>
            <div className="w-full border border-black mb-10 md:mb-15 lg:mb-20"></div>
        </>
    );
};
