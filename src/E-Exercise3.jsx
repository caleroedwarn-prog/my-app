import { useState } from "react";

function HandleClicks(){
    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setSubmittedText(text);
        setText("");
    }
    return(
        <>
        <p>Exercise3 on event</p>
        <form onSubmit={handleSubmit}>
        <input type="text"
        value={text}
        placeholder="type..." 
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" >submit </button>
        </form>
        <p>{submittedText}</p>
        </>
    )
}
export default HandleClicks;