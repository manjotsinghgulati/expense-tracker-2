import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect called");
    });

    const updateCount = () => {
        setCount(count+1);
    }

    // setInterval(updateCount, 1000);

    return (
        <div>
            <h1>You are using the counter {count} numbers of times</h1>
            <button onClick = {updateCount}>Start Counter</button>
        </div>
    )
}

export default UseEffect;

// Create component that updates the title of the page based on the current value of state variable.

