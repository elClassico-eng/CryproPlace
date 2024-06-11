import React, { useState, useEffect } from "react";

import { useGetAllCoinQuery } from "../../Redux/CryptoCoin/crypto.api";
import { CardCoinInfo } from "../../Component/Dashboard/CardCoinInfo/CardCoinInfo";

export const Cryptocurrencies = ({ limited }) => {
    const count = limited ? 10 : 100;

    const [coinCurrencies, setCoinCurrencies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const { isLoading, isError, data } = useGetAllCoinQuery(count);

    useEffect(() => {
        const filteredCoins = data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCoinCurrencies(filteredCoins);
    }, [data, searchTerm]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <>
            {!limited && (
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-4 p-5 text-white bg-bgColor">
                    <span className="text-lg md:text-xl">
                        Search Cryptocoin
                    </span>
                    <input
                        type="text"
                        placeholder="Bitcoin"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 border py-2 px-4 rounded-xl border-gray-300"
                    />
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {isLoading && <h1 className="text-center">Loading...</h1>}
                {coinCurrencies?.map((currencies) => (
                    <CardCoinInfo coinInfo={currencies} key={currencies.uuid} />
                ))}
            </div>
        </>
    );
};
