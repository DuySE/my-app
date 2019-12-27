import React, { Component } from 'react';
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    render() {
        return (        
            <div>
                <div>
                    <span>Counter:</span>
                    <span>{this.props.counter}</span>
                </div>
                <div>
                    <input type="text" onChange={e => this.props.handleChange(e.target.value)}></input>
                </div>
                <button onClick={() => this.props.increase(this.state.value)}>+</button>
                <button onClick={() => this.props.decrease(this.state.value)}>-</button>
            </div>
        )
    }
}

export default Todos;
