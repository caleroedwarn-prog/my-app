import {useState} from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSummit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    return(
        <>
        <form onSubmit={handleSummit}>
            <input 
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="password"
            placeholder="Enter PAssword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        </>
    );
}
export default LoginForm;