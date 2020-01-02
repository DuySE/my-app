import React, { Component } from 'react';

class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = { editable: false, title: '', content: '' };
    }
    toggleEdit() {
        this.setState({ editable: !this.state.editable });
        const { handleSave, blog } = this.props;
        if (this.state.editable) handleSave({...blog, title: this.state.title, content: this.state.content});
    }
    render() {
        const { title, content, blog, handleDelete } = this.props;
        return (
            <div>
                {this.state.editable ? (
                    <div>
                        <input type="text" placeholder="New title" onChange={e => this.setState({title: e.target.value})} />
                        <input type="text" placeholder="New content" onChange={e => this.setState({content: e.target.value})} />
                    </div>
                    ) : (
                        <div>
                            <span>{blog.title}</span>
                            <span>{blog.content}</span>
                        </div>
                    )
                }
                <button onClick={() => this.toggleEdit()}>
                    {this.state.editable ? "Save" : "Edit"}
                </button>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        )
    }    
}

export default BlogItem;
