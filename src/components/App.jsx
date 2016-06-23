import React, { Component } from 'react';
var myImage = require("../assets/praisethesun.png"); // just to test that loaders work

export default class App extends Component {
	render() {
		return (
			<div className="container">
				{/* Your app goes in here, this is just boilerplate */}
				<h1>Hello, World!</h1>
				<img src={myImage} />
			</div>
		);
	}
}