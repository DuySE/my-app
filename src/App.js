import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import configStore from './stores';
import Routes from './pages';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const { store } = configStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
