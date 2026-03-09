import { useState } from "react";

function FormExercise() {
    const [forms, setForms] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleForms = (e) => {
        setForms({...forms,
             [e.target.name]: e.target.value
        });
    };
    const togglePassword = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(forms.password === forms.confirmPassword ? "Form Submitted Successfully" : "password do not match");
    };

    const isTyping = forms.password && forms.confirmPassword;
    const isMatch = forms.password === forms.confirmPassword;
    const isDisabled = !forms.name || !forms.email || !isTyping || !isMatch;

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={forms.name}
          onChange={handleForms}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={forms.email}
          onChange={handleForms}
        />
        <br />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          value={forms.password}
          onChange={handleForms}
        />
        <br />

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={forms.confirmPassword}
          onChange={handleForms}
        />
        <br />

        <button type="button" onClick={togglePassword}>
            {showPassword ? "hide" : "Show"}
        </button>

        {isTyping && (
            <p>{isMatch ? "passwords Match" : "Passwords do not Match"}</p>
        )}

        <button type="submit" disabled={isDisabled}>Submit</button>

        {message && <p>{message}</p>}
      </form>
    );
}
export default FormExercise;