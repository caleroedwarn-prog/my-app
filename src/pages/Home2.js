import { useState } from "react";
import Input from "../component/Input";
import Display from "../component/Display";

function Home2(){
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return(
        <div>
            <h2>Lifting State Up</h2>
            <Input value={text} onChange={handleChange} />

            <Display text={text}/>
        </div>
    );
}
export default Home2;