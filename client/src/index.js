import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import  { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import reduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
