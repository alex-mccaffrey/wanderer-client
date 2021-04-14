import React, { useState }  from "react";
import { FindUser }  from "../services/FindUser";
//import GetAddress from "../services/GetAddress";
import "./AddLocation.css";

function AddLocation() {

  const findUser = FindUser;

  const [name, setName] = useState("");
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the name:", name)
  }

  const getLocation = () => {
    setLocation(findUser())
    console.log("this is the location", location)
  }


  return (
    <div className="AddLocation">
      <h2>Add Location</h2>
      <form id="new-location" onSubmit={handleSubmit}>
        <section className="form-section overview-section">
          <label htmlFor="who" className="who">
            Name
          </label>
          <br />
          <input
            type="text"
            name="who"
            placeholder="Put your name here"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <button
          id="find-me"
          onClick={() => {
          getLocation();
          }}
        >
          Show my location
        </button>
        {/* <button
          id="convert-latlong"
          onClick={() => {
          convertLatlong();
          }}
        >
          What's my address?
        </button> */}
        <br />
        <p id="status"></p>
        <p id="latlong"></p>
        <p id="address"></p>
        <a id="map-link" target="_blank"></a>
        <br/>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default AddLocation;
