import React from "react";

const MyComponent = (props) => {
    if (props.data === 'error') {
        throw new Error('Data is invalid');
    }
    return(
        <div><h1>{props.data}</h1></div>
    )}

export default MyComponent;