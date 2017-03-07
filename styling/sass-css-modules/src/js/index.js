import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";
import styles  from "../styles/main.scss";

ReactDom.render(
    <App/>,
    document.getElementById('app')
);
