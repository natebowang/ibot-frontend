import {createSlice} from "@reduxjs/toolkit";

/**
 *  States for the whole application.
 */
const appSlice = createSlice({
    name: 'app',
    initialState: {
        wiw: window.innerWidth,
    },
    reducers: {
        updateWiw: state => {
            state.wiw = window.innerWidth
        },
    },
});

export const {updateWiw} = appSlice.actions;

export const selectWiw = state => state.app.wiw;

export const appReducer = appSlice.reducer;
