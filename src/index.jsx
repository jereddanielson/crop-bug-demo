//require("file?name=../public/index.html!./index.html"); // copy index.html
require("file?name=../public/favicon.ico!./favicon.ico"); // copy favicon.ico
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./index.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#myApp"));