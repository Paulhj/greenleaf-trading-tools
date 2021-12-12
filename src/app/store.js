import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pairTradeBlocksApi } from "./services/pairTradeBlocks";
import { pairTradeBlockAnalysisApi } from "./services/pairTradeBlockAnalysis";
import authSlice from "../components/auth/authSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pairTradeBlocksApi.reducerPath]: pairTradeBlocksApi.reducer,
    [pairTradeBlockAnalysisApi.reducerPath]: pairTradeBlockAnalysisApi.reducer,
    authSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pairTradeBlocksApi.middleware)
      .concat(pairTradeBlockAnalysisApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
