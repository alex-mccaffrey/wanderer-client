import React, { useState, useEffect } from 'react'
import "./Register.css";

function Register(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.storeUser({username, password})
  }

  return (
    <section className="register">
      <h3>Register</h3>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="group-name">Group Username</label>
          <input
            placeholder="Group Name"
            type="text"
            name="group-name"
            id="group-name"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password" 
          id="password"
          onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
