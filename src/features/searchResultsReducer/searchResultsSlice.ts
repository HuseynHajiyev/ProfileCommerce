import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResutProduct } from "../../models/ProductInterface";

interface searchResultsState {
    searchResults: SearchResutProduct[];
    searchCategories: string[];
    loading: boolean;
    error: string | null;
}

const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState: {
      searchResults: [],
      searchCategories: [],
      loading: false,
      error: null,
    } as searchResultsState,

    reducers: {
        loadSearchResults: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.error = null;
        },
        loadSearchResultsFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<SearchResutProduct[]>) => {
            if (action.payload.length === 0) {
                state.error = 'no results';
                state.loading = false;
            } else {
                state.searchResults = action.payload;
                state.loading = false;
                state.error = null;
            }
        },
        setSearchCategories: (state, action: PayloadAction<string[]>) => {
            state.searchCategories = action.payload;
        }
    }
});

export const { loadSearchResults, loadSearchResultsFailed, setSearchResults, setSearchCategories } = searchResultsSlice.actions;

export default searchResultsSlice.reducer