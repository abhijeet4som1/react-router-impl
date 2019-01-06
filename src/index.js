import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import {Landing} from './landing';
import {configureStore} from './store/configureStore';
import { BrowserRouter } from 'react-router-dom'

import './client/css/index.css';

let store = configureStore({});
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Landing />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
