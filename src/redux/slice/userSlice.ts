import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../types/userTypes";

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
