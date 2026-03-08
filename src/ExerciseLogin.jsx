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
    setForm({...form, [e.target.name]: e.target.value});
 };
const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Password donot match");
    } else {
      setMessage("LOGIN SUCCESS");
    }
};
 
return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='name'
        placeholder="Enter your Name"
        value={form.name}
        onChange={handleForm}
      />
      <br />

      <input
        type="email"
        name='email'
        placeholder="Enter Email"
        value={form.email}
        onChange={handleForm}
      />
      <br />

      <input
        type="password"
        name='password'
        placeholder="Enter Password"
        value={form.password}
        onChange={handleForm}
      />
      <br />

      <input
        type="password"
        name='confirmPassword'
        placeholder="confirm Password"
        value={form.confirmPassword}
        onChange={handleForm}
      />
      <br />

      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
);
}
export default SignUps;