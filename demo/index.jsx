import React, { Component } from "react";
import ReactDOM from "react-dom";
import InlineConfirmButton from "../index.jsx";

class Root extends Component {
    state = {
        isExecuting: false
    }
    
    debug = () => {
        console.log(this.state);
    }

    handleClick = () => {
        this.setState({ isExecuting: true }, this.debug);
        setTimeout(() => {
            this.setState({ isExecuting: false }, this.debug)
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