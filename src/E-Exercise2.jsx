import { useState } from "react";

function HandleAlert(){
    const [text, setText] = useState("");
    function AlertingInput(e){
        if(e.key === "Enter"){
        alert(text);
        setText("");
        }
    }
    return (
      <>
      <p>Exercise 2 on event</p>
        <input
          value={text}
          type="text"
          placeholder="type"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={AlertingInput}
        />
      </>
    );
}
export default HandleAlert;