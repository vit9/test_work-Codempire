import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.css'
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import Router from "./router";
import store from "./state/state";



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Router/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
