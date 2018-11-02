import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OfficePage from './components/OfficePage/OfficePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action){ 
};

const store = createStore(reducer);
store.dispatch({type:"AGE_UP"});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
