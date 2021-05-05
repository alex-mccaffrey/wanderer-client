import React, { useState } from "react";
import "./Home.css";
import FullMap from "../Maps/FullMap";
//import Context, {Consumer} from "../Context"

const Home = (props) => {
  
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");


  const onInputChange = (e) => {
    console.log(e)
    setName(e.target.value)
    e.target.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }

  //////// InfoWindow Form ////////////
  function InfoWindowForm() {
    return (
      <form className="infowindow-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          id="name"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="notes"
          placeholder="Share some details"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div className="Home">
      <h1>Hello</h1>
      <section>
        <h2>Here are the members</h2>
        <p>This is where a list of the group members will be.</p>
      </section>
      <section>
        <h2>Recent locations</h2>
        <p>
          This is where the most recent location pins will be listed, showing
          who it was, where they were, and the time it was logged.
        </p>
      </section>
      <InfoWindowForm />
      <FullMap name={name} notes={notes}/>
    </div>
  );
};

export default Home;
