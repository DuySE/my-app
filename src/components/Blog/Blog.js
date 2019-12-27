import React, { Component } from 'react';
import BlogList from './BlogList';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', content: '' };
    }
    render() {
        const { handleSubmit, handleDelete, blogs } = this.props;
        return (
            <div>
                <h2 text-align="center">My Blog</h2>
                <BlogList blogs={blogs} handleDelete={handleDelete} />
                <div>
                    <span>
                        <label>Title:</label>
                        <input type="text" onChange={e => this.setState({title: e.target.value})} autoFocus />
                    </span>
                </div>
                <div>
                    <span>
                        <label>Content:</label>
                        <textarea rows="10" cols="50" onChange={e => this.setState({content: e.target.value})} />
                    </span>
                    <button onClick={() => handleSubmit(this.state.title, this.state.content)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Blog;
