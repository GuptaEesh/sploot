import React, { useState } from "react";
import "./Login.css";
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
    <article className="flex landing-form flex-c align-center justify h-100">
      <h1 className="underline">Blogs Bank</h1>
      <form
        onSubmit={submitHandler}
        className="form flex flex-c gap-2 justify p-2 align-center br-010"
      >
        <label className="flex flex-c align-start gap-1">
          <strong> Email </strong>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={inputHandler}
            value={email}
            className="p-1 br-010"
          />
        </label>
        <label className="flex flex-c align-start gap-1">
          <strong>Password </strong>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={inputHandler}
            value={password}
            className="p-1 br-010"
          />
        </label>
        <button className="btn secondary ptr" onClick={guestLoginHandler}>
          Fill-in test credentials
        </button>
        <button className="btn primary ptr">Login</button>
      </form>
    </article>
  );
};

export { Login };
