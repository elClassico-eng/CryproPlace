import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./CryptoCoin/crypto.api";
import { newsCoin } from "./CryptoCoin/cryptoNews.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
        [newsCoin.reducerPath]: newsCoin.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinApi.middleware, newsCoin.middleware),
});

setupListeners(store.dispatch);
