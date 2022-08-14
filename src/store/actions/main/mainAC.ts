export const reducers = {
    countIncrementAC: (state, {payload}: {payload?: number}) => {

        state.count = state.count + 1;
    },

    countDiscrementAC: (state) => {

        state.count = state.count - 1;
    },
};
