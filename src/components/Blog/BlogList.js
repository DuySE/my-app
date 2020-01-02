import React, { Component } from 'react';
import BlogItem from './BlogItem';

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = { editable: false, newTitle: '', newContent: '' };
    }
    render() {
        const { handleDelete, blogs, handleSave } = this.props;
        return (
            <ul>
                {blogs.map(blog => (<li key={blog.id}>
                    <BlogItem blog={blog} handleDelete={handleDelete} handleSave={handleSave} />
                </li>))
                }
            </ul>
        )
    }
}

export default BlogList;
