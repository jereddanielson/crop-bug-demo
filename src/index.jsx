require("file?name=../public/index.html!./index.html")
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./index.scss");


import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#myApp"));