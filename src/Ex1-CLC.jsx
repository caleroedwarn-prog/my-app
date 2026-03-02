import {useRef} from "react";

function Examples() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <>
        <input ref = {inputRef} />
        <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
export default Examples;