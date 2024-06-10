import React from "react";
import { Element } from "react-scroll";

export const Title = ({ title, justify }) => {
    return (
        <>
            <div
                className={`flex w-full ${
                    justify && "justify-center"
                } items-center mt-10 md:mb-15 lg:mb-20`}
            >
                <Element name={`${title}`}>
                    <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold uppercase">
                        {title}
                    </h1>
                </Element>
            </div>
        </>
    );
};
