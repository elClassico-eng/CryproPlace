import React from "react";

import { useGetAllCoinQuery } from "../../Redux/CryptoCoin/crypto.api";

import { StatisticCard } from "../../Component/Dashboard/StatisticCard/StatisticCard";
import { ShowMore } from "../../Component/Dashboard/ShowMore/ShowMore";

export const HomePage = () => {
    const {
        isLoading: isLoadingCoin,
        isError,
        data: coinInfo,
    } = useGetAllCoinQuery(10);

    if (isError) {
        throw new Error("Coin is not defined :(");
    }

    console.log(coinInfo);

    return (
        <div className="p-4 ml-[20%]">
            <div className="mb-2 border-black">
                <h1 className="text-4xl font-semibold mb-1">
                    Global Crypto Stats
                </h1>
                <div className="border border-black w-full"></div>
            </div>
            <div className="grid grid-rows-3 grid-cols-2 mb-14">
                {isLoadingCoin && (
                    <h1 className="font-bold text-xl">Loading data coin...</h1>
                )}
                <StatisticCard resource={coinInfo} />
            </div>
            <ShowMore
                title="Top 10 Cryptocurrencies in the world!"
                linkTo="/dashboard/cryptocurrencies"
                currencies={true}
            />
            <ShowMore title="Latest Crypto News" linkTo="/dashboard/news" />
        </div>
    );
};
