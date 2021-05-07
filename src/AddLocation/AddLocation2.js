import React, { useState } from "react";
import "./AddLocation.css";
import Locate from "../Map/Locate/Locate";
import FullMap from "../Map/FullMap/FullMap";
import DummyData from "../Map/DummyData"

//////// InfoWindow Form ////////////
export default function AddLocation2() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [currentLocationMarker, setCurrentLocationMarker] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentLocationMarker(e.target)
    // DummyData.push(currentLocationMarker)  /
  };

  return (
    <div>
      <FullMap notes={notes} name={name} />
      <form className="infowindow-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="notes"
          placeholder="Share some details"
          id="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
