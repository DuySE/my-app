import cuid from 'cuid';

export const TODO_HANDLECHANGE = 'todo/HANDLECHANGE';
export const TODO_HANDLESUBMIT = 'todo/HANDLESUBMIT';
export const TODO_HANDLEDELETE = 'todo/HANDLEDELETE';

const handleChange = text => ({
    type: TODO_HANDLECHANGE,
    text,
})

const handleSubmit = items => ({
    type: TODO_HANDLESUBMIT,
    items,
})

const handleDelete = id => ({
    type: TODO_HANDLEDELETE,
    id,
})

export const actions = {
    handleChange,
    handleSubmit,
    handleDelete,
}

const getItem = ({ todo }) => todo.items;
const getText = ({ todo }) => todo.text;

export const selectors = {
    getItem,
    getText,
}

const initialState = {
    items: [],
    text: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TODO_HANDLECHANGE: {
            const newState = {...state};
            newState.text = action.text;
            return newState;
        }
        case TODO_HANDLESUBMIT: {
            const newState = {...state};
            if (!state.text.length) return state;
            newState.items = [
                {
                    text: state.text,
                    id: cuid(),
                },
                ...newState.items
            ];
            return newState;
        }
        case TODO_HANDLEDELETE: {
            const { id } = action;
            const newState = {...state};
            newState.items = newState.items.filter(item => item.id !== action.id);
            return newState;
        }
        default: return state;
    }
}
