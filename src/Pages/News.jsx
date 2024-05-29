import React from "react";
import { useGetLastNewsQuery } from "../Redux/CryptoCoin/cryptoNews.api";

export const News = () => {
    const { isLoading, isError, data: news } = useGetLastNewsQuery();

    console.log(news);

    if (isError) {
        <h1>Try later</h1>;
    }

    return (
        <>
            <div className="grid gap-2 grid-cols-4">
                {isLoading && <h1>Loadind news...</h1>}
                {news?.map((newsItem) => (
                    <div className="w-full h-96  rounded-xl border  shadow-xl overflow-hidden p-5 transform transition-transform hover:scale-105">
                        <img
                            src={newsItem?.image_url}
                            alt="News image"
                            className="h-full w-full"
                        />
                        <div className="flex"></div>
                    </div>
                ))}
            </div>
        </>
    );
};
