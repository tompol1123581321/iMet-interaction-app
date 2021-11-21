import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  loggedIn: boolean;
  userName: string;
}

const initialState = { loggedIn: false, userName: "" } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userName = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
