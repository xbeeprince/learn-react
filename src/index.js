import React from "react";
import ReactDOM from "react-dom";
import styles from "./css/index.css";
import Game from "./Game";

// class IndexComponet extends React.Component {
//     render(){
//         return <h1> hello world!!!</h1>
//     }
// }

var oBox = document.getElementById("root");

ReactDOM.render(<Game/>,oBox);
