import { useState } from "react";

function ButtonSignUp() {
    const [forms, setForms] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");

    const handleForms = (e) =>{
        setForms({...forms,
          [e.target.name] : e.target.value
        });
    };
    const handleSubmits = (e) =>{
        e.preventDefault();
        if(forms.password === forms.confirmPassword){
            setMessage("Login Success");
        }else{
            setMessage("Invalid credential");
        }
    };
    const isMatch = forms.password === forms.confirmPassword;
    return (
      <>
      <form onSubmit={handleSubmits}>
        <input
          type="text"
          name="name"
          value={forms.name}
          placeholder="Enter Name"
          onChange={handleForms}
        />
        <br />

        <input
          type="email"
          name="email"
          value={forms.email}
          placeholder="Enter Email"
          onChange={handleForms}
        />
        <br />

        <input
          type="password"
          name="password"
          value={forms.password}
          placeholder="Enter Password"
          onChange={handleForms}
        />
        <br />

        <input
          type="password"
          name="confirmPassword"
          value={forms.confirmPassword}
          placeholder="confirm passowrd"
          onChange={handleForms}
        />
        <br />

        <button type="submit"
        disabled={!isMatch}>
            Submit
        </button>
        <p>{message}</p>
      </form>
</>
    );

}
export default ButtonSignUp;