import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Repositories,
  RepositoriesState,
  SearchRepo,
} from "../types/repositoriesTypes";

const initialState: RepositoriesState = {
  repositories: null,
  searchRepo: null,
  searchValue: "",
  pageNumberRepositories: 1,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositoriesList(state, action: PayloadAction<Repositories>) {
      state.repositories = action.payload;
    },
    setSearchRepositoriesList(state, action: PayloadAction<SearchRepo>) {
      state.searchRepo = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumberRepositories = action.payload;
    },
  },
});

export const {
  setRepositoriesList,
  setSearchRepositoriesList,
  setSearchValue,
  setPageNumber,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
