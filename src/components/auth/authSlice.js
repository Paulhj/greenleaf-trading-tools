import { createSlice } from "@reduxjs/toolkit";
import { pairTradeBlocksApi } from "../../app/services/pairTradeBlocks";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        pairTradeBlocksApi.endpoints.login.matchPending,
        (state, action) => {
          console.log("pending", action);
        }
      )
      .addMatcher(
        pairTradeBlocksApi.endpoints.login.matchFulfilled,
        (state, action) => {
          console.log("fulfilled", action);
          if (action.payload.succeeded) {
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.isAuthenticated = true;
          }
        }
      )
      .addMatcher(
        pairTradeBlocksApi.endpoints.login.matchRejected,
        (state, action) => {
          console.log("rejected", action);
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state) => {
  return state.authSlice.isAuthenticated;
};

export const selectToken = (state) => {
  return state.authSlice.token;
};
