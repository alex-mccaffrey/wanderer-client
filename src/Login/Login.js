import './Login.css';

const Login = (props) => {

  let loggedIn = props.setLoggedIn

  const handleSubmit = e => {
    e.preventDefault()
    loggedIn = true
    console.log("this is loggedIn", loggedIn)
  }

  return (
    <section className="login">
    <h3>Sign In</h3>

        <form className='login-form' onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign In</button>
        </form>
      </section>
  );
}

export default Login;
