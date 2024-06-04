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

    if (isError) {
        throw new Error("Coin currencies is not defined!");
    }

    return (
        <>
            {!limited && (
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search cryptocurrencies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-1/2 border py-2 px-4 rounded-xl border-gray-300"
                    />
                </div>
            )}
            <div className="grid gap-6 grid-cols-4">
                {isLoading && <h1>Loading...</h1>}
                {coinCurrencies?.map((currencies) => (
                    <CardCoinInfo coinInfo={currencies} key={currencies.uuid} />
                ))}
            </div>
        </>
    );
};
