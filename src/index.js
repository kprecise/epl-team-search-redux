import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxPromise),
));

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("app")
);