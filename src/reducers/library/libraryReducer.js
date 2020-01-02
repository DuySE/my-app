import cuid from 'cuid';

export const LIBRARY_REGISTER = 'library/REGISTER';

const register = (username, password, firstName, lastName) => ({
    type: LIBRARY_REGISTER,
    username,
    password,
    firstName,
    lastName,
})

export const actions = {
    register,
}

const initialState = {
    users: [],
}

const getUsers = ({ library }) => library.users;

export const selectors = {
    getUsers,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIBRARY_REGISTER: {
            const newState = {...state};
            newState.users = [
                {
                    username: action.username,
                    password: action.password,
                    firstName: action.firstName,
                    lastName: action.lastName,
                },
                ...newState.users
            ];
            return newState;
        }
        default: return state;
    }
}
