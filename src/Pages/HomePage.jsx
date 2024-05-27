import React, { useState } from "react";

import {
    useLazyGetCoinByIdQuery,
    useGetAllCoinQuery,
} from "../Redux/CryptoCoin/crypto.api";

import { Statistic } from "antd";

export const HomePage = () => {
    const { isLoading: isLoadingCoin, isError, data } = useGetAllCoinQuery();

    const [fetchRepos, { isLoading, data: coinByID }] =
        useLazyGetCoinByIdQuery();

    if (isError) {
        throw new Error("Coin is not defined :(");
    }

    const coinInfo = { ...data };

    return (
        <div className="p-4">
            <div className="mb-2 border-black">
                <h1 className="text-4xl font-semibold mb-1">
                    Global Crypto Stats
                </h1>
                <div className="border border-bgColor w-full"></div>
            </div>
            <div className="grid grid-rows-3 grid-cols-2">
                {isLoading && (
                    <h1 className="font-bold text-xl">Loading data coin...</h1>
                )}
                <Statistic
                    title="Total Cryptocurrencies"
                    value={coinInfo.stats.total}
                />
                <Statistic
                    title="Total Exchanges"
                    value={coinInfo.stats.totalExchanges}
                />
                <Statistic
                    title="Total Market Cap"
                    value={coinInfo.stats.totalMarketCap}
                />
                <Statistic
                    title="Total 24h Volume"
                    value={coinInfo.stats.total24hVolume}
                />
                <Statistic
                    title="Total Markets"
                    value={coinInfo.stats.totalMarkets}
                />
            </div>
        </div>
    );
};
