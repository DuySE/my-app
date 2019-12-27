const COUNTERS_INCREASE = 'counters/INCREASE';
const COUNTERS_DECREASE = 'counters/DECREASE';
const COUNTERS_HANDLECHANGE = 'counters/HANDLECHANGE';

const increase = value => ({
    type: COUNTERS_INCREASE,
    value,
})

const decrease = value => ({
    type: COUNTERS_DECREASE,
    value,
})

const handleChange = value => ({
    type: COUNTERS_HANDLECHANGE,
    value,
})

export const actions = {
    increase,
    decrease,
    handleChange,
}
//===
const getCounter = ({ counters }) => counters.counter;

export const selectors = {
    getCounter,
}

const initialState = {
    counter: 0,
    value: 1,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case COUNTERS_INCREASE: {
            const newState = {...state};
            newState.counter += Number(state.value);
            return newState;
        }
        case COUNTERS_DECREASE: {
            const newState = {...state};
            newState.counter -= state.value;
            return newState;
        }
        case COUNTERS_HANDLECHANGE: {
            const newState = {...state};
            newState.value = action.value;
            return newState;
        }
        default: return state;
    }
}
