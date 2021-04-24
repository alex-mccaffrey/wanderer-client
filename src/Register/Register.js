import React, { useState } from "react";
import authApiService from "../services/auth-api-service";
import "./Register.css";

function Register(props) {
  const [error, setError] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault(e);
    const { username, password, confirmPassword } = e.target;
    setError(null);
    if (password.value === confirmPassword.value) {
      authApiService
        .postUser({
          username: username.value,
          password: password.value,
        })
        .then((user) => {
          props.history.push("/login");
        })
        .catch((res) => {
          setError(res.error);
        });
      } else {
          alert("Passwords do not match");
        }
  };

  return (
    <section className="register">
      <h3>Register</h3>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && (
          <p className="error" style={{ color: "red" }}>
            {error}
          </p>
        )}
        <div>
          <label htmlFor="username">Group Username</label>
          <input
            placeholder="Group Username"
            type="text"
            name="username"
            id="username"
            //defaultValue="Demo"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            //defaultValue="DemoPassword123!"
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            //defaultValue="DemoPassword123!"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
