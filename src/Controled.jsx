import {useState} from "react";

function AppTest(){
    const [text, setText] = useState("");
    let message;
    function condition(e){
        if(text.length>= 20){
          message = "Limit exceeded";
        }else{
            setText(e.target.value);
        }
    }

    return(
        <div>
            <input 
            type="text"
            value={text}
            onChange = {condition}
            />
            <p>Characters: {text.length}</p>
            <p>message : {message}</p>
        </div>
    );
}
export default AppTest