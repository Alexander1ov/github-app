import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repo, RepositoriesState } from "../types/repositoriesTypes";

const initialState: RepositoriesState = {
  repositories: null,
  loading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositoriesList(state, action: PayloadAction<Repo>) {
      state.repositories = action.payload;
    },
  },
});

export const { setRepositoriesList } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
