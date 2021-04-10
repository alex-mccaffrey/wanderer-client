import './Login.css';

function Login() {
  return (
    <section className="login">
    <h3>Sign In</h3>

        <form class='login-form'>
          <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
  );
}

export default Login;
