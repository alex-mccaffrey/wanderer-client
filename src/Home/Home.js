import React, { useState, useEffect } from "react";
import "./Home.css";
import FullMap from "../Map/FullMap/FullMap";


const Home = (props) => {



  return (
    <div className="Home">
      <h1>Hello!</h1>
      <section>
        <h2>You have arrived</h2>
        <p>Below you will find a list of who was where and when. Just click on the box with there name and you can see the exact location they last recorded along with the time and a note. If you would like to see where you are relative to others, just click 'Find Me'. </p>
      </section>
      <section>
        <h2>Below is a list of recent call outs.</h2>
      </section>
      <section className="map-and-add">
      <p id="loading">Use 'Find Me' to see where you are in relation to others.</p>
      <FullMap newMarkerProp={props}/>
      </section>
    </div>
  );
};

export default Home;
