import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/scss/main.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore , applyMiddleware,compose,combineReducers} from 'redux';
import authReducer from './store/reducers/auth';
import itemQtyReducer from './store/reducers/itemQty';
import popularReducer from './store/reducers/popular';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth:authReducer,
    itemQty:itemQtyReducer,
    popular:popularReducer
})

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
