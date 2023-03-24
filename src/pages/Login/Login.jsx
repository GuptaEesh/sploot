import React, { useState } from "react";
import { loginHandler, useAuth } from "../../helpers";

const Login = () => {
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const { email, password } = formFields;
  const { login } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(formFields, login);
  };
  const guestLoginHandler = (e) => {
    e.preventDefault();
    setFormFields((prev) => ({
      ...prev,
      email: "testassignment@gmail.com",
      password: "highlysecure",
    }));
  };
  const inputHandler = (e) => {
    setFormFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <article>
      <form onSubmit={submitHandler}>
        <label>
          <span> Email : </span>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={inputHandler}
            value={email}
          />
        </label>
        <label>
          <span>Password : </span>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={inputHandler}
            value={password}
          />
        </label>
        <button onClick={guestLoginHandler}>Fill-in test credentials</button>
        <button>Login</button>
      </form>
    </article>
  );
};

export { Login };
