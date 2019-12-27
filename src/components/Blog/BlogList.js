import React, { Component } from 'react';

const BlogList = ({ handleDelete, blogs }) => (
    <ul>
        {blogs.map(blog => (<li key={blog.id}>
                <span>{blog.title}</span>
                <span>{blog.content}</span>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </li>))}
    </ul>
)

export default BlogList;
