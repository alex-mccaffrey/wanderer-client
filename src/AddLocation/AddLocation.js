import React, { useState, useEffect } from "react";
import { FindUser } from "../services/FindUser";
import AddLocationExample from "../images/add-location-example.jpeg";
//import GetAddress from "../services/GetAddress";
import "./AddLocation.css";
import AddLocationMap from "../Map/AddLocationMap/AddLocationMap";

function AddLocation() {

  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [newMarker, setNewMarker] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the the newMarker:", newMarker, name, notes);
  };


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
          <br />
          <input
            type="text"
            name="notes"
            placeholder="Share some details"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </section>

        <br />
        <AddLocationMap 
        name={name} 
        notes={notes} 
        newMarker={newMarker}
        setNewMarker={setNewMarker} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddLocation;
