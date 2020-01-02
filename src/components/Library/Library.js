import React, { Component } from 'react';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            isLogin: false,
        };
    }
    handleLogin(username, password) {
        const user = this.props.users.map(user => user.username === username && user.password === password);
        console.log(user);
        if (user) {
            console.log("Login successfully!");
            this.setState({isLogin: true});
        }
    }
    render() {
        return(
            <div>
                {!this.state.isLogin ? (
                <div>
                    <div>
                        <span>
                            <input type="text" placeholder="Username"
                            onChange={e => this.setState({username: e.target.value})} />
                        </span>
                        <span><input type="password" placeholder="Password"
                            onChange={e => this.setState({password: e.target.value})} />
                        </span>
                    </div>
                    <div>
                        <span>
                            <input type="text" placeholder="First Name"
                                onChange={e => this.setState({firstName: e.target.value})} />
                        </span>
                        <span>
                            <input type="text" placeholder="Last Name"
                                onChange={e => this.setState({lastName: e.target.value})} />
                        </span>
                    </div>
                </div>
                ) : (
                    <div>
                        <div>
                        <span>
                            <input type="text" placeholder="Username"
                            onChange={e => this.setState({username: e.target.value})} />
                        </span>
                        <span><input type="password" placeholder="Password"
                            onChange={e => this.setState({password: e.target.value})} />
                        </span>
                    </div>
                    </div>
                )}
                {!this.state.isLogin ? (
                <button onClick={() =>
                    this.props.register(
                        this.state.username,
                        this.state.password,
                        this.state.firstName,
                        this.state.lastName
                    )}>
                    Register
                </button>) : (
                    <button onClick={() =>
                        this.handleLogin(
                            this.state.username,
                            this.state.password
                        )}>
                        Login
                    </button>
                )}
                <a href="#" onClick={() => this.setState({isLogin: !this.state.isLogin})}>{this.state.isLogin ? "Register" : "Login"}</a>
                {this.state.isLogin ? (
                    <div className="alert alert-success">Login successfully!</div>
                ) : (
                    <div className="alert alert-info">Login failed!</div>
                )}
                <button onClick={() => this.props.getAllJokes()}></button>
            </div>
        )
    }
}

export default Library;
