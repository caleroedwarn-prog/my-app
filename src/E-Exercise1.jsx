import { useState } from "react";

function HandleClick(){
    const [count, setCount] = useState(0);
    function handleButton(e){
        e.preventDefault();
        console.log("I've been click");

            setCount((prev) => prev + 1);
    }
    return(
        <>
        <p>Exercise1 on event</p>
        <h4>Counter: {count}</h4>
        <button onClick={handleButton}>Cliick me and check console</button>
        </>
    )
}
export default HandleClick;