import {useState} from "react";

function DisableButton(){
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    return (
      <div>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button disabled={name === ""} onClick={(e) => setShow(true)}>
          submit
        </button>
        {show && <p>hello : {name}</p>}
      </div>
    );
}
export default DisableButton;