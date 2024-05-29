import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryAPI = "https://api.coinranking.com/v2";

const apiKey = process.env.REACT_APP_API_KEY;

export const coinApi = createApi({
    reducerPath: "cryptoCoin/api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseQueryAPI,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            if (apiKey) {
                headers.set("x-access-token", apiKey);
            }
            return headers;
        },
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getCoinById: builder.query({
            query: (id) => `/coin/${id}`,
        }),
        getAllCoin: builder.query({
            query: (count) => `/coins?limit=${count}`,
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useLazyGetCoinByIdQuery, useGetAllCoinQuery } = coinApi;
