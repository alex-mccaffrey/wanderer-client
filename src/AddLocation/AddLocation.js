import React, { useState } from "react";
import AuthApiService from "../services/auth-api-service";
import "./AddLocation.css";
import AddLocationMap from "../Map/AddLocationMap/AddLocationMap";

function AddLocation(props) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [newMarker, setNewMarker] = useState(null);

  const disableSubmit = () => {
    if (newMarker) {
      const hasLatLng = newMarker.lat && newMarker.lng;
      return !hasLatLng;
    } else return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedMarker = {
      name,
      notes,
      latitude: newMarker.lat,
      longitude: newMarker.lng,
      timeAdded: new Date(),
    };
    AuthApiService.postMarker(addedMarker).then((marker) => {
      props.history.push({
        pathname: "/home",
      });
    });
  };

  return (
    <div className="AddLocation">
      <h1>Call Out!</h1>
      <section className="add-location-about">
        <ul className="addList">
          <li>Enter your name so others know who was here.</li>
          <li>
            {" "}
            Use the details section if you want to add a note, joke, or piece of
            wisdom.
          </li>
          <li>
            {" "}
            Once you're ready, click 'Find Me'. If needed, you can drag your pin
            around to the precise location. Once everything looks good, click
            Submit!
          </li>
        </ul>
        <br />
      </section>
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
          <label htmlFor="notes" className="notes">
            Notes
          </label>
          <br />
          <input
            type="text"
            name="notes"
            placeholder="Share some details"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </section>
        <p id="addLoad">Click "Find Me" gather your location</p>
        <AddLocationMap
          name={name}
          notes={notes}
          newMarker={newMarker}
          setNewMarker={setNewMarker}
        />
        <button type="submit" className="submit" disabled={disableSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddLocation;
