import React from "react";
import ReactDOM from "react-dom";
import styles from "./css/index.css";

class IndexComponet extends React.Component {
    render(){
        return <h1> hello world!!!</h1>
    }
}

var oBox = document.getElementById("box");

ReactDOM.render(<IndexComponet/>,oBox);
