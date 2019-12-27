import cuid from 'cuid';

export const BLOG_SUBMIT = 'blog/SUBMIT';
export const BLOG_DELETE = 'blog/DELETE';

const handleSubmit = (title, content, id) => ({
    type: BLOG_SUBMIT,
    title,
    content,
    id,
})

const handleDelete = id => ({
    type: BLOG_DELETE,
    id,
})

export const actions = {
    handleSubmit,
    handleDelete,
}

const getBlog = ({ blog }) => blog.blogs;
const getTitle = ({ blog }) => blog.title;
const getContent = ({ blog }) => blog.content;

export const selectors = {
    getBlog,
    getTitle,
    getContent,
}

const initialState = {
    blogs: [],
    title: '',
    content: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BLOG_SUBMIT: {
            const newState = {...state};
            newState.blogs = [
                {
                    id: cuid(),
                    title: action.title,
                    content: action.content,
                },
                ...newState.blogs
            ];
            return newState;
        }
        case BLOG_DELETE: {
            const { id } = action;
            const newState = {...state};
            newState.blogs = newState.blogs.filter(blog => blog.id !== action.id);
            return newState;
        }
        default: return state;
    }
}