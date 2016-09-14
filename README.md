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

React.render((
	<InlineConfirmButton className="btn btn-default" textValues={textValues} showTimer onClick={handleClick}>
		<i className="fa fa-trash"></i>
	</InlineConfirmButton>
), document.getElementById("myApp"));

function handleClick() {
	console.log("got a confirmation!");
}
```

This would allow the user to confirm their action before calling the `handleClick` function.
