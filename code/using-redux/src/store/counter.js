import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) { //the payload can be an object, number, etc ... what you pass
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;