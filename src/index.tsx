import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import './index.css';
import './normalize.css'
import './styles.scss'
import App from './App';
import { setupStore } from "./Store/store";

const store = setupStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
;

// serviceWorker.unregister();

