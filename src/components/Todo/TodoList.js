import React, { Component } from 'react';
class TodoList extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => this.props.handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default TodoList;
