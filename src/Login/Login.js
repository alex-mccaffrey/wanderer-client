import React, { useState } from 'react'
import authApiService from "../services/auth-api-service"
import TokenService from "../services/token-service"
import {Spinner} from "../Spinner/Spinner"
import "./Login.css";

const Login = (props) => {


  const [error, setError] = useState("")
  const [loggedInState, setLoggedInState] = useState()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedInState("logging in")
    const { username, password } = e.target;
    const user = { username: username.value, password: password.value };
    setError(null)
    authApiService.loginUser(user)
    .then((loginResponse) => {
      TokenService.saveAuthToken(loginResponse.authToken);
      props.history.push("/home");
    //   props.history.push({
    //   pathname: '/home',
    //   state: { user: loggedInUser }
    // })
  })
    .catch(res => {
      setError(res.error)
    })
  };

  return (
    <section className="login">
      {loggedInState === "logging in" ? <Spinner /> : ""}
      <h3>Login</h3>
      {error && <p className="error" style={{color: 'red'}}>{error}</p>}
      <p>Demo Account: Username "Demo", Password "DemoPassword123!"</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" /*defaultValue="Demo"*//>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" /*defaultValue="DemoPassword123!"*//>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default Login;
