import { configureStore } from "@reduxjs/toolkit";

import repositoriesSlice from "./slice/repositoriesSlice";

const store = configureStore({
  reducer: {
    repositories: repositoriesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
