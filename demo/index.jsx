import React, { Component } from "react";
import ReactDOM from "react-dom";
import InlineConfirmButton from "../index.jsx";

class Root extends Component {
    state = {
        isExecuting: false
    }

    handleClick = () => {
        this.setState({ isExecuting: true })
        setTimeout(() => {
            console.log("test")
            this.setState({ isExecuting: false })
        }, 3000)
    }

    render() {
        const textValues = ["Delete", "Are you sure?", "Deleting..."];
        const confirmIconClass = `fa fa-${this.state.isExecuting ? "circle-o-notch fa-spin" : "fa fa-trash"}`;

        return (
            <InlineConfirmButton className="btn btn-default" textValues={textValues} showTimer isExecuting={this.state.isExecuting} onClick={this.handleClick}>
		        <i className={confirmIconClass}></i>
	        </InlineConfirmButton>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById("demoApp"));