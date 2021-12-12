import { createApi, retry } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const pairTradeBlocksApi = createApi({
  reducerPath: "pairTradeBlocksApi",
  baseQuery: baseQuery, //fetchBaseQuery({ baseUrl: baseUrlDev }),
  tagTypes: ["PairTradeBlockList"],
  endpoints: (builder) => ({
    getAllPairTradeBlocks: builder.query({
      query: () => ({ url: "pairtradeblock" }),
      providesTags: ["PairTradeBlockList"],
    }),
    addPairTradeBlock: builder.mutation({
      query: (body) => ({
        url: `CorrMatrixAnalysis`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["PairTradeBlockList"],
    }),
    deletePairTradeBlock: builder.mutation({
      query: (id) => ({
        url: `pairtradeblock/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PairTradeBlockList"],
    }),
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
          retry.fail({ fake: "error" });
        },
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPairTradeBlocksQuery,
  useLoginMutation,
  useAddPairTradeBlockMutation,
  useDeletePairTradeBlockMutation,
} = pairTradeBlocksApi;

export const {
  endpoints: { login },
} = pairTradeBlocksApi;
