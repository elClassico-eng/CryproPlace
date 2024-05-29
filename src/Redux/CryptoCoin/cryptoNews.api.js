import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apikey = process.env.REACT_APP_NEWS_API_KEY;

const baseQuery = fetchBaseQuery({
    baseUrl: "https://newsdata.io/api/1",
    prepareHeaders: (headers) => {
        headers.set("apikey", apikey);
        return headers;
    },
});

export const newsCoin = createApi({
    reducerPath: "newsApi",
    baseQuery,
    endpoints: (builder) => ({
        getLastNews: builder.query({
            query: (params) => ({
                url: "/latest",
                params: {
                    ...params,
                    q: "crypto",
                    country: "ru",
                    apikey: apikey,
                },
            }),
            transformResponse: (response) => response.results,
        }),
    }),
});

export const { useGetLastNewsQuery } = newsCoin;
