import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";
import repositoriesSlice from "./slice/repositoriesSlice";
import searchSlice from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    repositories: repositoriesSlice,
    search: searchSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
