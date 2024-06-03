import React from "react";

import { useGetLastNewsQuery } from "../../Redux/CryptoCoin/cryptoNews.api";

import { NewsCard } from "../../Component/NewsCard/NewsCard";

export const News = () => {
    const { isLoading, isError, currentData: news } = useGetLastNewsQuery({});

    if (isError && !news)
        return (
            <div>
                <h1>Data missing. Try later!</h1>
            </div>
        );

    console.log(news);

    return (
        <>
            <div className="grid gap-6 grid-cols-4 p-4">
                {isLoading && <h1>Loading news...</h1>}
                {news &&
                    news.map((newsItem, i) => (
                        <NewsCard
                            resource={newsItem}
                            index={i}
                            key={newsItem?.article_id}
                        />
                    ))}
            </div>
        </>
    );
};
