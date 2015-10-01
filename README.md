# React Inline Confirm Component

> A react component that allows you to get a confirmation of action from the user before executing an action.

## Install with [NPM](https://www.npmjs.com/)

```
npm install react-inline-confirm --save
```

## How to Use

```jsx
import React from "react";
import InlineConfirmButton from "react-inline-confirm";

var isExecuting = false;

const textValues = ["Delete", "Are you sure?", "Deleting..."];

React.render((
	<div className="clearfix">
		<InlineConfirmButton className="btn btn-default" textValues={textValues} showTimer={true} onClick={handleClick}>
			<i class="fa fa-trash"></i>
		</InlineConfirmButton>
	</div>
), document.getElementById("myApp"));

function handleClick() {
	console.log("got a confirmation!");
}
```

This would allow the user to confirm their action before calling the `handleClick` function.
