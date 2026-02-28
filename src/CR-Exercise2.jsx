import { useState } from "react";
function Rendering(){
    const [age, setAge] = useState("");
    let message;
    if(age !== ""){
        if(age >= 18){
            message = "You are an Adult";
        }else {
            if(age < 18){
                message = "You are a Minor";
            }else{
                setAge("");
            }
        }
    }
    return(
        <>
        <p>Exercise2 on Conditional Rendering</p>
        <input type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />
        <p>{message}</p>
        </>
    );
}
export default Rendering;