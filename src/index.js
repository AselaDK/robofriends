import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';	//removed beacuse never used
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { robots } from './robots';	//put robots -> {robots} coz robots arn't default
//we can import like {robots, cats, dogs, ...}

ReactDOM.render(
	<div>
		<CardList robots = {robots} />
	{/*
	CardList for render
	refering robots array from robots.js to load details
	*/}
	</div>

	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
