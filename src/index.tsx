import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import './normalize.css'
import './styles.scss'
import App from './App';
import {setupStore} from "./Store/store";

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
;

// serviceWorker.unregister();

