import {useState} from 'react';

function SignUps() {
const [form, setForm] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword: ""
});
const [message, setMessage] = useState("");
 const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
 };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    if (form.password !== form.confirmPassword) {
      setMessage("Password donot match");
    } else {
      setMessage(`confirmed ${form.name}`);
    }
};
 
return (
  <div>
    <form onClick={handleSubmit}>
      <input
        type="name"
        placeholder="Enter your Name"
        value={form.name}
        onChange={handleForm}
      />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
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
export default SignUps;