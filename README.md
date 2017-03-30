# React Inline Confirm Component

> A react component that allows you to get a confirmation of action from the user before executing an action. 
> 'isExecuting' is the state of react when the button was clicked. The default value should be false. It can be passed as an argument for your react component.

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
