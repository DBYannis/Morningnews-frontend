import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

    export const bookmarksSlice = createSlice({
        name: 'bookmarks',
        initialState,
        reducers: {
            addBookmarksToStore: (state, action) => {
                state.value.push(action.payload);
                console.log(state.value)
            },
            removeBookmarkToStore:(state, action) => {
                state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title)
            }
        },
    });

export const { addBookmarksToStore, removeBookmarkToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;