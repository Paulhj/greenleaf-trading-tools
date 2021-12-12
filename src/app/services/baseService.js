import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://pairtradingapi.azurewebsites.net/api/";
//export const BASE_URL = "https://localhost:44372/api/";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().authSlice.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
