import { useMemo } from "react";

function MemoExample({number}){
    const double = useMemo(() => {
        console.log("Calculating...");
        return number * 2;
    }, [number]);
    return(
        <>
         <h2>{double}</h2>
         </>
    );
}
export default MemoExample;