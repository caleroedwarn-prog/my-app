import { useState, useEffect } from "react";

function Component(){
    const[count, setCount] = useState(0);
    useEffect(() => {
        console.log("Mounted");

        return () => {
        console.log("Cleanup");
        };
    }, []);

    useEffect(() => {
        console.log("Updated");
    }, [count]);
    return(
        <>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(prev =>(prev + 1))}>count</button>
        </>
    );
}
export default Component