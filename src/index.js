import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import * as serviceWorker from './serviceWorker';
import HCMDemo from './HCMDemo';
import HCMDemo2 from './HCMDemo2';

//ReactDOM.render(<Welcome />, document.getElementById('root'));

ReactDOM.render(<HCMDemo2 />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
