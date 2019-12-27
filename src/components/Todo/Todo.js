import React, { Component } from 'react';
import TodoList from './TodoList';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.props.items} handleDelete={this.props.handleDelete} />
                <form onSubmit={e => {e.preventDefault(); this.props.handleSubmit()}}>
                    <label>What needs to be done?</label>
                    <input id="new-todo" onChange={e => this.props.handleChange(e.target.value)} />
                    <button>Add #{this.props.items.length + 1}</button>
                </form>
            </div>
        )
    }
}

export default Todo;
