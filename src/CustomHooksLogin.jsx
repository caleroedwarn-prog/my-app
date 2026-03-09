import React, { useState } from "react";
import { useForm } from "./CustomHooks";

function CustomHookForm() {
    const [form, handleFormChange] = useForm({
        name: "",
        email: ""
    });
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Hello ${form.name}, your email is ${form.email}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleFormChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleFormChange}
        />
        <br />
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    );
}
export default CustomHookForm;