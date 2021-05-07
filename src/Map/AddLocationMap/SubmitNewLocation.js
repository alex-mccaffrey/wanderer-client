import React, { useState } from "react";

export default function SubmitNewLocation(tempMarker) {

  const [addMarker, setAddMarker] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the name:", tempMarker);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">New Location Submit</button>
    </form>
  );
}
