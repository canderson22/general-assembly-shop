import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import  { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import reduxPromise from 'redux-promise';
// import {StripeProvider} from 'react-stripe-elements';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
    // <StripeProvider apiKey='pk_test_6BHnRpbfLZSr0IIv8mCjwC8o'>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    // </StripeProvider>,
    document.getElementById('root')
);
// registerServiceWorker();
