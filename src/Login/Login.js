import React from "react";
import TokenService from "../services/token-service";
import { API_BASE_URL } from "../config";
import "./Login.css";

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const newUser = { username: username.value, password: password.value };
    // fetch(`${API_BASE_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((loginResponse) => {
    //     TokenService.saveAuthToken(loginResponse.authToken);
    //     this.props.history.push('/home')
    //   }).catch(err=>console.error(err))
    TokenService.saveAuthToken('jkhb3q4597y98tibluergkjhberg4');
         props.history.push('/home')
  };

  return (
    <section className="login">
      <h3>Login</h3>

      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value="demoUser"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value="demoPassword12!"/>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default Login;
