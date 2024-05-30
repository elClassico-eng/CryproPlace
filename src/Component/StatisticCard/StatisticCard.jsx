import React from "react";

import { Statistic } from "antd";
import millify from "millify";

export const StatisticCard = ({ resource }) => {
    return (
        <>
            <Statistic
                title="Total Cryptocurrencies"
                value={millify(resource?.stats?.total) ?? "N/A"}
            />
            <Statistic
                title="Total Exchanges"
                value={millify(resource?.stats?.totalExchanges) ?? "N/A"}
            />
            <Statistic
                title="Total Market Cap"
                value={millify(resource?.stats?.totalMarketCap) ?? "N/A"}
            />
            <Statistic
                title="Total 24h Volume"
                value={millify(resource?.stats?.total24hVolume) ?? "N/A"}
            />
            <Statistic
                title="Total Markets"
                value={millify(resource?.stats?.totalMarkets) ?? "N/A"}
            />
        </>
    );
};
