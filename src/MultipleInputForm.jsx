import {useState} from "react";

function SignUp(){
    const [form, setForm] = useState({
        name : "",
        email : "",
        password : ""
    });

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
             /><br />

             <input 
             name="email"
             placeholder="Email"
             value={form.email}
             onChange={handleChange}
             /><br />

             <input
             name="password"
             placeholder="password"
             value={form.password}
             onChange={handleChange}
              /><br />

              <button type="submit">Submit</button>
        </form>
    );
}
export default SignUp;