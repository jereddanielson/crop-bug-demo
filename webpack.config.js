var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var html = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle-[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new html({ // create index.html from the ejs template
			template: "./src/index.ejs"
		})
	]
};