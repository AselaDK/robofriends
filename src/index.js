// App component eka render karanawa

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';	//removed beacuse never used
import App from './containers/App'; // Father of all components
//import CardList from './CardList';	//moved to App.js
import * as serviceWorker from './serviceWorker';
import 'tachyons'


ReactDOM.render(<App/>, document.getElementById('root'));
// App component to render... App.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
