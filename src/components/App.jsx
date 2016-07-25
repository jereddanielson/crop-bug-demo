import React, { Component } from 'react';
var myImage = require("../assets/praisethesun.png");

import ReactCrop from "react-image-crop";
require("../../node_modules/react-image-crop/dist/ReactCrop.css");

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<ReactCrop src={myImage} />
				<button onClick={() => {this.setState({foo: Date.now()})}}>Click me</button>
			</div>
		);
	}
}