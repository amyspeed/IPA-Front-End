import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import store from './store';

import './index.css';

import Landing from './components/landing/landing';

ReactDOM.render(
    // <Provider store={store}>
        <Landing />,
    // </Provider>,
    document.getElementById('root')
);
