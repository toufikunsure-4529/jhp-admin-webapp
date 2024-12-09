import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: intialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: () => {
      return intialState;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
