import {useState} from "react";

function ButtonSignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
        if(form.password !== form.confirmPassword){
            setMessage("Login Success");
        }else{
            setMessage("Invalid credential");
        }
    };
    const isMatch = form.password === form.confirmPassword;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="name"
          value={form.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="name"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="name"
          value={form.confirmPassword}
          placeholder="confirm passowrd"
          onChange={handleChange}
        />
        <br />

        <button type="submit"
        disabled={!isMatch}>
            Submit
        </button>
        <p>{message}</p>
      </form>
    );

}
export default ButtonSignUp;