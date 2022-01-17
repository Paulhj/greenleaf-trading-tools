import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const tickersApi = createApi({
  reducerPath: "tickersApi",
  baseQuery: baseQuery,
  tagTypes: ["TickerList"],
  endpoints: (builder) => ({
    getTickersBySectorId: builder.query({
      query: (sectorId) => ({ url: `tickers/${sectorId}` }),
      providesTags: ["TickerList"],
    }),
    getAllTickers: builder.query({
      query: () => ({ url: `tickers` }),
      providesTags: ["TickerList"],
    }),
    updateTicker: builder.mutation({
      query: (body) => ({
        url: `tickers`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["TickerList"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTickersBySectorIdQuery,
  useGetAllTickersQuery,
  useUpdateTickerMutation,
} = tickersApi;
