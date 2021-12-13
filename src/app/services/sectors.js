import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseService";

export const sectorsApi = createApi({
  reducerPath: "sectorsApi",
  baseQuery: baseQuery,
  tagTypes: ["SectorList"],
  endpoints: (builder) => ({
    getSectors: builder.query({
      query: () => ({ url: "sectors" }),
      providesTags: ["SectorList"],
    }),
    getSectorById: builder.query({
      query: (id) => ({ url: `sectors/${id}` }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSectorsQuery, useGetSectorByIdQuery } = sectorsApi;
