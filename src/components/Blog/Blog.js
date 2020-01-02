import React, { Component } from 'react';
import BlogList from './BlogList';
import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', content: '' };
    }
    render() {
        const { handleSubmit, handleDelete, blogs, handleSave } = this.props;
        return (
            <div>
                <h2 text-align="center">My Blog</h2>
                <Link to="/todo"><button>Next</button></Link>
                <BlogList blogs={blogs} handleDelete={handleDelete} handleSave={handleSave} />
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
