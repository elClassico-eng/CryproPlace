import React from "react";

import moment from "moment";
import bg from "../../../Images/bgImag.jpg";

export const NewsCard = ({ resource, index }) => {
    return (
        <a
            key={resource?.article_id}
            href={resource?.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full h-96 rounded-xl border border-gray-300 shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${
                index === 0 ? "col-span-2" : "col-span-1"
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
            <img
                src={bg}
                alt="News"
                className="absolute inset-0 w-full h-full z-0 object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20">
                <h2 className="font-bold text-lg text-white mb-2">
                    {resource?.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>{resource?.source_id}</span>
                    <span>
                        {moment(resource?.pubDate).startOf("ss").fromNow()}
                    </span>
                </div>
            </div>
        </a>
    );
};
