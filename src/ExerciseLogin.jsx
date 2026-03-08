import {useState} from 'react';

function SignUp() {
const [form, setForm] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword: ""
});
const [message, setMessage] = useState("");
 const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    if(form.password !== form.confirmPassword){
        setMessage("Password donot match")
    }else{
        setMessage(`confirmed ${form.name}`)
    }
 };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
};
 
return (
  <div>
    <form onClick={handleSubmit}>
      <input
        type="name"
        placeholder="Enter password"
        value={form.name}
        onChange={handleForm}
      />
      <br />

      <input
        type="email"
        placeholder="Enter password"
        value={form.email}
        onChange={handleForm}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleForm}
      />
      <br />

      <input
        type="password"
        placeholder="confirm Password"
        value={form.confirmPassword}
        onChange={handleForm}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
    <p>{message}</p>
  </div>
  );
}
export default SignUp;