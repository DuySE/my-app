export const JOKE_GET = 'joke/JOKE_GET';
export const JOKE_GET_SUCCESS = 'joke/JOKE_GET_SUCCESS';
export const JOKE_GET_FAILED = 'joke/JOKE_GET_FAILED';

const getJoke = () => ({
    type: JOKE_GET,
})

const getJokeSuccess = data => ({
    type: JOKE_GET_SUCCESS,
    data,
})

const getJokeFailed = error => ({
    type: JOKE_GET_FAILED,
    error,
})

export const actions = {
    getJoke,
    getJokeSuccess,
    getJokeFailed,
}

const initialState = {
    joke: null,
    isLoading: false,
    error: null,   
}

export default function(state = initialState, action) {
    switch(action.type) {
        case JOKE_GET: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case JOKE_GET_SUCCESS: {
            const newState = {...state};
            newState.joke = action.data;
            newState.error = null;
            return newState;
        }
        case JOKE_GET_FAILED: {
            const newState = {...state};
            newState.error = action.error;
            return newState;
        }
        default: return state;
    }
}
