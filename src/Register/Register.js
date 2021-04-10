import "./Register.css";

function Register() {
  return (
    <section className="register">
      <h3>Register</h3>
      <form class="signup-form">
        <div>
          <label for="group-name">Group Name</label>
          <input
            placeholder="Group Name"
            type="text"
            name="group-name"
            id="group-name"
          />
        </div>
        <div>
          <label for="username">Email</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default Register;
