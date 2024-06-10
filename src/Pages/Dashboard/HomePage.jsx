import React from "react";

import { useGetAllCoinQuery } from "../../Redux/CryptoCoin/crypto.api";

import { StatisticCard } from "../../Component/Dashboard/StatisticCard/StatisticCard";
import { ShowMore } from "../../Component/Dashboard/ShowMore/ShowMore";
import { CryptoChart } from "../../Component/Dashboard/CryptoChart/CryptoChart";

import { Navbar } from "../../Component/LandingPage/Navbar/Navbar";

export const HomePage = () => {
    const {
        isLoading: isLoadingCoin,
        isError,
        isSuccess,
        data: coinInfo,
    } = useGetAllCoinQuery(10);

    if (isError) {
        throw new Error("Coin is not defined :(");
    }

    return (
        <div className="h-full w-full">
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-10 md:gap-20 lg:gap-28 text-black  w-full h-full text-center ">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl uppercase leading-snug">
                    Get a complete overview of <br />
                    cryptocurrencies.
                </h1>
                <p className="text-sm">
                    Here you can learn more about cryptocurrency, track the
                    development of cryptocurrency and view the latest news
                </p>
            </div>
            <div className="p-4">
                <ShowMore title="Latest Crypto News" linkTo="/dashboard/news" />
                <div className="mb-2 ">
                    <h1 className="text-3xl font-semibold mb-1">
                        Global Crypto Stats
                    </h1>
                </div>
                <div className="grid grid-rows-1 grid-cols-2 mb-14 gap-4">
                    {isLoadingCoin ? (
                        <h1 className="font-bold text-xl">
                            Loading data coin...
                        </h1>
                    ) : (
                        <StatisticCard resource={coinInfo} />
                    )}
                </div>
                <div className="mb-14">
                    <h2 className="text-3xl font-semibold mb-4">
                        Market Overview
                    </h2>
                    {isSuccess && <CryptoChart data={coinInfo?.coins} />}
                </div>
                <ShowMore
                    title="Top 10 Cryptocurrencies in the world!"
                    linkTo="/dashboard/cryptocurrencies"
                    currencies={true}
                />
            </div>
        </div>
    );
};
