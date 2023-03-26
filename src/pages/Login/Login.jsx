import React, { useState } from "react";
import "./Login.css";
import { loginHandler, useAuth } from "../../helpers";
const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [checks, setChecks] = useState({
    error: "",
    status: true,
  });
  const { email, password } = formFields;
  const { login } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(formFields, login, setChecks);
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
    if (
      e.target.name === "password" &&
      e.target.value.length < 6 &&
      e.target.value.length !== 0
    )
      setChecks((prev) => ({
        ...prev,
        error: "Password should be more than 5 letters!",
        status: false,
      }));
    else setChecks((prev) => ({ ...prev, status: true }));
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
        <span
          style={{
            width: "25rem",
            color: "red",
            visibility: checks.status ? "hidden" : "visible",
          }}
        >
          {checks.error}
        </span>
        <button className="btn secondary ptr" onClick={guestLoginHandler}>
          Fill-in test credentials
        </button>
        <button
          className={` ${
            (!checks.status || password.length === 0) && "disableBtn"
          } btn primary ptr`}
          disabled={!checks.status}
        >
          Login
        </button>
      </form>
    </article>
  );
};

export { Login };
