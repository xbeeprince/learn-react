import React from "react";
import ReactDOM from "react-dom";

export default class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}