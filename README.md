# React Inline Confirm Component

> A react component that allows you to get a confirmation of action from the user before executing an action. 

![screenshot](screenshot.gif)

## Install

```
npm install react-inline-confirm --save
```

## How to Use

```jsx
import React from "react";
import InlineConfirmButton from "react-inline-confirm";

const textValues = ["Delete", "Are you sure?", "Deleting..."];
const confirmIconClass = `fa fa-${isExecuting ? "circle-o-notch fa-spin" : "fa fa-trash"}`;

React.render((
	<InlineConfirmButton className="btn btn-default" textValues={textValues} showTimer isExecuting={isExecuting} onClick={handleClick}>
		<i className={confirmIconClass}></i>
	</InlineConfirmButton>
), document.getElementById("myApp"));

function handleClick() {
	console.log("got a confirmation!");
}
```

This would allow the user to confirm their action before calling the `handleClick` function.
`IsExecuting` is a required flag prop that can be used to track the execution state of the `react-inline-confirm` button's click event handler from the parent component. This can come in handy when the callback method returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or performs asynchronous operations in general, since those can return before the method execution actually produces a result.

# Demo

1. `npm install` from the root directory
2. `npm run-script build`
3. `npm run-script start`
4. In your browser, navigate to `http://localhost:8080/demo/`

To reload, repeat steps `2` and `3`, then refresh your browser.