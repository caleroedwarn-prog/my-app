import { useState } from "react";
import api from "../api/api";

function Register() {
    const [name, setName] = useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await api.post("/users", {name: name});

            console.log(res.data);
            alert("User Created")
        }catch(err){
            alert("Error");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">
                Register
            </button>
        </form>
    );
}
export default Register;