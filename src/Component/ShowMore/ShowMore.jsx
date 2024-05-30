import React from "react";
import { News } from "../../Pages/News";
import { Cryptocurrencies } from "../../Pages/Cryptocurrencies";

import { Link } from "react-router-dom";

export const ShowMore = ({ title, linkTo, currencies }) => {
    return (
        <div className="flex flex-col gap-3 mb-16">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">{title}</h2>
                <Link to={linkTo}>
                    <h3 className="text-xl font-bold text-bgColor no-underline hover:underline">
                        Show More
                    </h3>
                </Link>
            </div>
            {currencies ? <Cryptocurrencies limited /> : <News limited />}
        </div>
    );
};
