import React from "react";
import "./Home.css";
import FullMap from "../Map/FullMap/FullMap";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Where they at?</h1>
      <section className="home-section">
        <h2>Check out recent Call Outs</h2>
        <p>
          Below you will find a list of who was where and when they were there.
          Just click on the box with there name and you can see the exact
          location they last recorded along with the time and a note. If you
          would like to see where you are relative to others, just click 'Find
          Me'.{" "}
        </p>
        <br />
        <p id="loading">
          Use 'Find Me' below to see where you are in relation to others. To add
          your location to the Call Out list, just tap "Call Out" in the
          navigation menu.
        </p>
      </section>
      <section>
        <FullMap newMarkerProp={props} />
      </section>
    </div>
  );
};

export default Home;
