import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repo, RepositoriesState } from "../types/repositoriesTypes";

const initialState: RepositoriesState = {
  repositoriesList: null,
  loading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositoriesList(state, action: PayloadAction<Repo[]>) {
      state.repositoriesList = action.payload;
    },
  },
});

export const { setRepositoriesList } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
