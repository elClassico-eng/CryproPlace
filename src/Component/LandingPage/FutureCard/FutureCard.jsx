import React from "react";

export const FutureCard = () => {
    return (
        <div className="grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 gap-10 md:gap-20 h-full text-2xl md:text-3xl lg:text-4xl uppercase text-black">
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/50 to-black/40 backdrop-blur-xl"></div>
                <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-center ">
                    <h1>Quick</h1>
                    <p className="font-normal text-sm md:text-base lg:text-lg">
                        Fast information processing speed
                    </p>
                </div>
            </div>
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/50 to-black/40 backdrop-blur-xl"></div>
                <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-center ">
                    <h1>Reliable</h1>
                    <p className="font-normal text-sm md:text-base lg:text-lg">
                        Consistent and dependable performance
                    </p>
                </div>
            </div>
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/50 to-black/40 backdrop-blur-xl"></div>
                <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-center ">
                    <h1>Scalable</h1>
                    <p className="font-normal text-sm md:text-base lg:text-lg">
                        Easily expandable and adaptable
                    </p>
                </div>
            </div>
        </div>
    );
};
