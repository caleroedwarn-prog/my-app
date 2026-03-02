import {useRef} from "react";
function Reference(){
const countRef = useRef(0);
const handleClick = () => {
    countRef.current++;
    console.log(countRef.current)
};
return (
    <>
    <button onClick={handleClick}>Click Me</button>
    </>
);
}
export default Reference;
