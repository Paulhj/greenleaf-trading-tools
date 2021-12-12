import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const pairTradeBlockAnalysisApi = createApi({
  reducerPath: "pairTradeBlockAnalysisApi",
  baseQuery: baseQuery,
  tagTypes: ["PairTradeBlockAnalysis"],
  endpoints: (builder) => ({
    runPairTradeBlockAnalysis: builder.query({
      query: (params) => ({
        url: "pairtradeblockanalysis",
        params: params,
      }),
      providesTags: ["PairTradeBlockAnalysis"],
    }),
    getPairTradeBlock: builder.query({
      query: (id) => ({
        url: `pairtradeblock/${id}`,
      }),
    }),
    getPairAnalysis: builder.query({
      query: (params) => ({
        url: `pairanalysis`,
        params: params,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyRunPairTradeBlockAnalysisQuery,
  useGetPairTradeBlockQuery,
  useGetPairAnalysisQuery,
} = pairTradeBlockAnalysisApi;
