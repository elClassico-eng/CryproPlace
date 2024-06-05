import React, { useState } from "react";

import { useGetCoinByIdQuery } from "../../Redux/CryptoCoin/crypto.api";
import { useParams } from "react-router-dom";
import millify from "millify";

import {
    DollarCircleOutlined,
    ThunderboltOutlined,
    TrophyOutlined,
    FundOutlined,
    MoneyCollectOutlined,
    StopOutlined,
    ExclamationCircleOutlined,
    CheckOutlined,
    NumberOutlined,
} from "@ant-design/icons";

export const CryptoDetails = () => {
    const { uuid } = useParams();
    const [timePeriod, setTimePeriod] = useState("7d");

    const { data, isError, isFetching } = useGetCoinByIdQuery(uuid);

    const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

    const cryptoDetails = data?.data?.coin;

    console.log(cryptoDetails);

    const stats = [
        {
            title: "Price to USD",
            value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
            icon: <DollarCircleOutlined />,
        },
        { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        {
            title: "24h Volume",
            value: `$ ${
                cryptoDetails?.volume && millify(cryptoDetails?.volume)
            }`,
            icon: <ThunderboltOutlined />,
        },
        {
            title: "Market Cap",
            value: `$ ${
                cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
            }`,
            icon: <DollarCircleOutlined />,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${
                cryptoDetails?.allTimeHigh?.price &&
                millify(cryptoDetails?.allTimeHigh?.price)
            }`,
            icon: <TrophyOutlined />,
        },
    ];

    const genericStats = [
        {
            title: "Number Of Markets",
            value: cryptoDetails?.numberOfMarkets,
            icon: <FundOutlined />,
        },
        {
            title: "Number Of Exchanges",
            value: cryptoDetails?.numberOfExchanges,
            icon: <MoneyCollectOutlined />,
        },
        {
            title: "Aprroved Supply",
            value: cryptoDetails?.supply?.confirmed ? (
                <CheckOutlined />
            ) : (
                <StopOutlined />
            ),
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Total Supply",
            value: `$ ${
                cryptoDetails?.supply?.total &&
                millify(cryptoDetails?.supply?.total)
            }`,
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${
                cryptoDetails?.supply?.circulating &&
                millify(cryptoDetails?.supply?.circulating)
            }`,
            icon: <ExclamationCircleOutlined />,
        },
    ];

    return (
        <div className="ml-[20%] w-auto h-full overflow-hidden p-4">
            {isFetching && (
                <h1 className="font-bold text-xl">Loading data...</h1>
            )}
            <div className="flex flex-col h-full w-screen text-center">
                <h1 className="font-bold text-4xl">
                    Price {cryptoDetails?.name} ({cryptoDetails?.symbol})
                </h1>
                <p>
                    {cryptoDetails?.name} live price in USD. <br /> View value
                    statistics, makret cap and supply!
                </p>
            </div>
        </div>
    );
};
