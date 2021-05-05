import React, { useState }  from "react";
import "./AddLocation.css";
import FullMap from "../Map/FullMap/FullMap"

//////// InfoWindow Form ////////////
export default function InfoWindowForm() {
      
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("this is e target name in submit", e.target.name.value)
      console.log("this is e target notes in submit", e.target.notes.value)
      console.log("submitted")
    }
    
    return (
        <div>
      <form className="infowindow-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          id="name"
          onChange={e => {setName(e.target.value)}}
        />
        <input
          type="text"
          name="notes"
          placeholder="Share some details"
          id="notes"
          value={notes}
          onChange={e => {setNotes(e.target.value)}}
        />
        <button type="submit">Submit</button>
      </form>
      <FullMap notes={notes} name={name} />
      </div>
    );
  }