import { useState } from "react";

function LoginForms(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "1234"){
            setMessage("Login Successful");
        }else{
            setMessage("Invalid Credentials");
        }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
    );
}
export default LoginForms;