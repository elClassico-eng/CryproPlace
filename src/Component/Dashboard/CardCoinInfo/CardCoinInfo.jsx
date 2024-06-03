import React from "react";
import millify from "millify";

export const CardCoinInfo = ({ coinInfo }) => {
    return (
        <div className=" w-full h-64 bg-gray-200 rounded-xl border  shadow-xl overflow-hidden p-5 transform transition-transform hover:scale-105">
            <div className="flex justify-between items-center mb-8">
                <h1 className="font-bold text-lg">
                    {coinInfo?.rank}.{coinInfo.name}
                </h1>
                <img
                    className="w-8 h-8"
                    src={coinInfo.iconUrl}
                    alt="Coin Icon"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p>Price: {millify(coinInfo.price)}</p>
                <p>Market Cap: {millify(coinInfo.marketCap)}</p>
                <p>Daily Change: {millify(coinInfo.change)}%</p>
            </div>
        </div>
    );
};
