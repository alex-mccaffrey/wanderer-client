import React, { useState } from "react";
import "./Home.css";
import FullMap from "../Map/FullMap/FullMap";
import AddLocation from "../AddLocation/AddLocation2"
//import Context, {Consumer} from "../Context"

const Home = () => {

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
      <section className="map-and-add">
      {/* <AddLocation /> */}
      <FullMap/>
      </section>
    </div>
  );
};

export default Home;
