import React, { Component } from "react";
import { PropTypes as t } from "prop-types";

export default class InlineConfirmButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resetTimer: null,
			buttonText: this.props.textValues[0],
			className: this.props.className,
			isPrompting: false,
			isTimedOut: false
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.isPrompting && !this.state.isPrompting) {
			this.setState({
				isTimedOut: true
			});
		}

		if (!prevState.isPrompting && this.state.isPrompting) {
			this.setState({
				isTimedOut: false
			});
		}

		if (prevProps.isExecuting && !this.props.isExecuting) {
			this.setState({
				resetTimer: null,
				buttonText: prevProps.textValues ? prevProps.textValues[0] : null,
				className: prevProps.className,
				isPrompting: false
			});
		}

		if (!prevProps.isExecuting && this.props.isExecuting) {
			this.setState({
				resetTimer: null,
				buttonText: prevProps.textValues ? prevProps.textValues[prevProps.textValues.length - 1] : null,
				className: `${prevProps.className ? prevProps.className + " " : null}active disabled`,
				isPrompting: false
			});
		}
	}

	handleClick(event) {
		if (!this.props.disabled) {
			const textValues = this.props.textValues;
			const stepIndex = textValues.indexOf(this.state.buttonText);

			if (stepIndex < textValues.length - 2) {

				const resetTimer = setTimeout(function () {
					this.setState({
						buttonText: textValues[stepIndex],
						className: this.props.className,
						isPrompting: false
					});
				}.bind(this), this.props.timeOut);

				this.setState({
					resetTimer: resetTimer,
					buttonText: textValues[stepIndex + 1],
					className: this.props.className ? `${this.props.className} btn-danger` : this.props.className,
					isPrompting: true
				});
			}

			else if (stepIndex === textValues.length - 2) {
				if (this.state.resetTimer) {
					clearTimeout(this.state.resetTimer);
				}

				this.setState({
					resetTimer: null,
					buttonText: textValues[textValues.length - 1],
					className: `${this.props.className ? this.props.className + " " : null}active disabled`,
					isPrompting: false
				});

				this.props.onClick(event);
			}
		}
	}

	render() {
		const duration = this.state.isTimedOut ? 0 : this.props.timeOut / 1000;
		const transition = `${duration}s width linear`;

		const progressStyles = {
			borderTop: "2px solid",
			marginTop: "-2px",
			width: this.state.isPrompting ? "0" : "100%",
			transition: transition,
			opacity: this.state.isPrompting ? 1 : 0
		};

		const progressBar = this.props.showTimer ? <div style={progressStyles}></div> : null;

		return <button disabled={this.props.disabled} type="button" className={this.state.className} onClick={this.handleClick.bind(this) }>
			{this.props.children}
			<span>{this.state.buttonText}</span>
			{progressBar}
		</button>;
	}
}

InlineConfirmButton.propTypes = {
	showTimer: t.bool,
	timeOut: t.number,
	disabled: t.bool,

	onClick: t.func.isRequired,
	isExecuting: t.bool.isRequired,
	textValues: t.arrayOf(t.string).isRequired
};


InlineConfirmButton.defaultProps = {
	showTimer: false,
	timeOut: 3000
}
