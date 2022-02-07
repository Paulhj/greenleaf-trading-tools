import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const tradesApi = createApi({
  reducerPath: "tradesApi",
  baseQuery: baseQuery,
  tagTypes: ["TradeList"],
  endpoints: (builder) => ({
    getAllTrades: builder.query({
      query: () => ({ url: `trades` }),
      providesTags: ["TradeList"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTradesQuery } = tradesApi;
