#React Inline Confirm Component

> A simple react component that allows you to get a confirmation of action from the user before executing an action.

##Install with [NPM](https://www.npmjs.com/)

```
npm install react-inline-confirm
```

Then add `react-inline-confirm.jsx` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to a button or a link.

###Confirm an Action

```jsx
const textValues = ["Delete", "Are you sure?", "Deleting..."];
<InlineConfirmButton textValues={textValues} onClick={delete} isExecuting={isDeleting}></InlineConfirmButton>
```

This would allow the user to confirm their action before calling the `delete` handler on the component.
`isDeleting` is a status flag indicating the execution state of the `delete` handler; e.g.: set it to `true` at the beginning of your handler and `false` at the end. 

