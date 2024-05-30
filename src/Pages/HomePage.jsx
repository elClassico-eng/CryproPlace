import React from "react";

import { useGetAllCoinQuery } from "../Redux/CryptoCoin/crypto.api";

import { StatisticCard } from "../Component/StatisticCard/StatisticCard";
import { ShowMore } from "../Component/ShowMore/ShowMore";

export const HomePage = () => {
    const {
        isLoading: isLoadingCoin,
        isError,
        data: coinInfo,
    } = useGetAllCoinQuery(10);

    if (isError) {
        throw new Error("Coin is not defined :(");
    }

    return (
        <div className="p-4 ml-[20%]">
            <div className="mb-2 border-black">
                <h1 className="text-4xl font-semibold mb-1">
                    Global Crypto Stats
                </h1>
                <div className="border border-bgColor w-full"></div>
            </div>
            <div className="grid grid-rows-3 grid-cols-2 mb-14">
                {isLoadingCoin && (
                    <h1 className="font-bold text-xl">Loading data coin...</h1>
                )}
                <StatisticCard resource={coinInfo} />
            </div>
            <ShowMore
                title="Top 10 Cryptocurrencies in the world!"
                linkTo="/cryptocurrencies"
                currencies={true}
            />
            <ShowMore title="Latest Crypto News" linkTo="/news" />
        </div>
    );
};
