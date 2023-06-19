import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState, SearchRepo } from "../types/searchTypes";

const initialState: SearchState = {
  searchRepo: null,
  searchValue: "",
  restart: true,
  numCalls: 0,
  pageNumberSearch: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchRepositoriesList(state, action: PayloadAction<SearchRepo>) {
      state.searchRepo = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    toggleRestart(state, action: PayloadAction<boolean>) {
      state.restart = action.payload;
    },
    addCalls(state) {
      state.numCalls += 1;
    },
    setPageNumberSearch(state, action: PayloadAction<number>) {
      state.pageNumberSearch = action.payload;
    },
  },
});

export const {
  setSearchRepositoriesList,
  setSearchValue,
  toggleRestart,
  addCalls,
  setPageNumberSearch,
} = searchSlice.actions;
export default searchSlice.reducer;
