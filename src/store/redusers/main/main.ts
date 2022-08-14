import { createSlice } from '@reduxjs/toolkit'
import { reducers } from "../../actions/main/mainAC";
import { IStore } from './types';

const initialState: IStore = {
    count: 0
};

const counterSlice = createSlice({
    name: 'main',
    initialState,
    reducers: reducers,
})

export const mainReducer = (state = initialState, action) => {
    return counterSlice.reducer(state, action);
};

export const {countIncrementAC, countDiscrementAC} = counterSlice.actions;