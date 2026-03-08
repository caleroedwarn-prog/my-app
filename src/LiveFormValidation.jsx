import { useState } from "react";

function LiveValidation() {
    const [form, setForm] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [message, setMessage] = useState("");

    const handleForm = (e) =>{
        setForm({...form, 
            [e.target.name] : e.target.value
        });
    }; 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.password === form.confirmPassword){
            setMessage("Login Success");
        }
    };
    const isMatch = form.password === form.confirmPassword;
    const isTyping = form.password !== "" && form.confirmPassword !== "";

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleForm}
             /><br />

             <input 
             type="email"
             name="email"
             placeholder="Enter your Email"
             value={form.email}
             onChange={handleForm}
             /><br />

             <input
             type="password"
             name="password"
             placeholder="password"
             value={form.password}
             onChange={handleForm}
              /><br />

              <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              value={form.confirmPassword}
              onChange={handleForm}
               /><br />

               <button type="submit" disabled= {!isMatch}>
                Submit
               </button>
               {isTyping && (
                <p>
                    {isMatch ? "Password Match" : "Password do not Match"}
                </p>
               )}
               <p>{message}</p>
        </form>
        </>
    );
}
export default LiveValidation;