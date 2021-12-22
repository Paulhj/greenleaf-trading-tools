import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const tickersApi = createApi({
  reducerPath: "tickersApi",
  baseQuery: baseQuery,
  tagTypes: ["TickerList"],
  endpoints: (builder) => ({
    getTickersBySectorId: builder.query({
      query: (sectorId) => ({ url: `tickers/${sectorId}` }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTickersBySectorIdQuery } = tickersApi;
