import { useState } from "react";

function Component(){
    const[count, setCount] = useState(0);
    return(
        <>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(prev =>(prev + 1))}>count</button>
        </>
    );
}
export default Component