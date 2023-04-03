import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      // Submit form data
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <form className = "sign-up" onSubmit={handleSubmit}>
      <div>
      <h2>Sign Up</h2>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
