import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodoPage from './TodoPage';
import CounterPage from './CounterPage';
import BlogPage from './BlogPage';

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={CounterPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/blog" component={BlogPage} />
        {/* <Route path="/" component={CounterPage} /> */}
        <Redirect to="/" />
    </Switch>
)

export default Routes;
