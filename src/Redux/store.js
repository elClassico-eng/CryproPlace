import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./CryptoCoin/crypto.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinApi.middleware),
});

setupListeners(store.dispatch);
