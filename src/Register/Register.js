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
      <h1>Register</h1>
      <h3>How do you create an account?</h3>
      <section className="howto-register">
      <p>
        Wanderer accounts are group accounts. Whether you are a family, gang of
        friends, flock of coworkers, or herd of strangers, everyone will have
        access to the same account. One username (make it good) and one password
        for everyone to keep track of.
        <br/>
        <br />
        Once created, you can share the info with everyone in the group. Start sharing, on your terms.
      </p>
      </section>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && (
          <p className="error" style={{ color: "red" }}>
            {error}
          </p>
        )}
        <div>
          <label htmlFor="username">Group Username</label>
          {" "}
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
          {" "}
          <input
            type="password"
            name="password"
            id="password"
            //defaultValue="DemoPassword123!"
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          {" "}
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            //defaultValue="DemoPassword123!"
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </section>
  );
}

export default Register;
