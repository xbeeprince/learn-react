import React from "react";
import ReactDOM from "react-dom";

export default class Square extends React.Component {

    constructor(){
        super();
    }
    render() {
        return (
            <button className="square" onClick = {() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}