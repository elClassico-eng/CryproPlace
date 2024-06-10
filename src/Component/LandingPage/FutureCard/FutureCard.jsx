import React from "react";

export const FutureCard = () => {
    return (
        <div className="grid grid-cols-1 mb-20 md:grid-cols-1 lg:grid-cols-2 p-4 md:p-8 gap-10 md:gap-20 h-full text-2xl md:text-3xl lg:text-4xl  text-black">
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden border p-5 border-gray-300 shadow-lg transform  hover:scale-105 transition-transform duration-300">
                <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-center ">
                    <h1>Reliable</h1>
                    <p className="font-normal text-sm md:text-base lg:text-lg">
                        Consistent and dependable performance
                    </p>
                </div>
            </div>
            <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-xl overflow-hidden border p-5 border-gray-300 shadow-lg transform  hover:scale-105 transition-transform duration-300">
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
