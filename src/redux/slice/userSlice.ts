import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../types/userTypes";

const initialState: UserState = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setEntrance(state) {
      state.isAuth = true;
    },
  },
});

export const { setUserData, setEntrance } = userSlice.actions;
export default userSlice.reducer;
