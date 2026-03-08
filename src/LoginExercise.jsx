import { useState } from "react";

function Login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmmit = (e) =>{
        e.preventDefault();

        if(email === "caleroedwarn@gmail.com" && password === "1234"){
            setMessage(`welcome ${name}`);
        }else{
            setMessage("invalid credential");
        }
    };
    return (
      <div>
        <form onSubmit={handleSubmmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />

          <input
            type="email"
            value={email}
            placeholder="Enter valid Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    );
}
export default Login;