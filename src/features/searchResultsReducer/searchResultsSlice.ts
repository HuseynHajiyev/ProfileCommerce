import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResutProductInterface } from "../../models/ProductInterface";

interface searchResultsState {
    searchResults: SearchResutProductInterface[];
    searchCategories: string[];
    loading: boolean;
    error: string | null;
    logAction: string | null;
}

const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState: {
        searchResults: [],
        searchCategories: [],
        loading: false,
        error: null,
        logAction: null,
    } as searchResultsState,

    reducers: {
        loadSearchResults: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.error = null;
            state.logAction = action.type;
        },
        loadSearchResultsFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<SearchResutProductInterface[]>) => {
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