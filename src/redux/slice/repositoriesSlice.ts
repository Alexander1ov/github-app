import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repositories, RepositoriesState } from "../types/repositoriesTypes";

const initialState: RepositoriesState = {
  repositories: null,
  pageNumberRepositories: 1,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositoriesList(state, action: PayloadAction<Repositories>) {
      state.repositories = action.payload;
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumberRepositories = action.payload;
    },
  },
});

export const { setRepositoriesList, setPageNumber } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
