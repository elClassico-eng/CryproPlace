import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import {
    useLazyGetCoinByIdQuery,
    useGetAllCoinQuery,
} from "../Redux/CryptoCoin/crypto.api";

import { News } from "../Pages/News";
import { Cryptocurrencies } from "../Pages/Cryptocurrencies";

import { Statistic } from "antd";

export const HomePage = () => {
    const { isLoading: isLoadingCoin, isError, data } = useGetAllCoinQuery(10);

    if (isError) {
        throw new Error("Coin is not defined :(");
    }

    const coinInfo = data ?? {};

    console.log(coinInfo);

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
                <Statistic
                    title="Total Cryptocurrencies"
                    value={millify(coinInfo.stats?.total) ?? "N/A"}
                />
                <Statistic
                    title="Total Exchanges"
                    value={millify(coinInfo.stats?.totalExchanges) ?? "N/A"}
                />
                <Statistic
                    title="Total Market Cap"
                    value={millify(coinInfo.stats?.totalMarketCap) ?? "N/A"}
                />
                <Statistic
                    title="Total 24h Volume"
                    value={millify(coinInfo.stats?.total24hVolume) ?? "N/A"}
                />
                <Statistic
                    title="Total Markets"
                    value={millify(coinInfo.stats?.totalMarkets) ?? "N/A"}
                />
            </div>
            <div className="flex flex-col gap-3 mb-16">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold">
                        Top 10 Cryptocurrencies in the world!
                    </h2>
                    <Link to="/cryptocurrencies">
                        <h3 className="text-xl font-bold text-bgColor no-underline hover:underline">
                            Show More
                        </h3>
                    </Link>
                </div>
                <Cryptocurrencies limited />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold">Latest Crypto News</h2>
                    <Link to="/news">
                        <h3 className="text-xl font-bold text-bgColor no-underline hover:underline">
                            Show More
                        </h3>
                    </Link>
                </div>
                <News limited />
            </div>
        </div>
    );
};
