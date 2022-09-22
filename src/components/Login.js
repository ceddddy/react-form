import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    if (+password < 1) {
      return;
    }
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form action="/action_page.php" onSubmit={loginHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={emailInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            value={password}
            onChange={passwordInputHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
