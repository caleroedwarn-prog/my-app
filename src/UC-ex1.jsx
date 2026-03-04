import { useCallback, useState} from "react";

function ExampleFunc(){
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        console.log("CLicked");
    };
    return(
        <>
        <child onClick = {handleClick} />
        </>
    );
}