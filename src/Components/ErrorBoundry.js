// import { useState } from "react";
import React, {useState} from 'react'; 

const ErrorBoundary = (props) => {

    const [error, setError] = useState(props.data);

    return (
        <div>
            {error ? <h1>Something went wrong</h1> : props.data}
        </div>
    )
}

export default ErrorBoundary;

// class ErrorBoundary extends Component { constructor(props) { super(props);
//     this.state = { hasError: false };
//     }
//     static getDerivedStateFromError(error)
//     {
//     return { hasError: true };
//     }
//     render()
//     {
//     if (this.state.hasError) { return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//     }
//     }