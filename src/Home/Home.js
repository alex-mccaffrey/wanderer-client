import React from 'react'
import "./Home.css";
//import Context, {Consumer} from "../Context"


const Home = props => {

const user = props.user 


  return (
    
    <div className="Home">
      <h1>Hello {user}</h1>
      <section>
        <h2>Here are the members</h2>
        <p>This is where a list of the group members will be</p>
      </section>
      <section>
        <h2>Recent locations</h2>
        <p>
          This is where the most recent location pins will be listed, showing
          who it was, where they were, and the time it was logged.
        </p>
      </section>
    </div>
    
  );
}

export default Home;
