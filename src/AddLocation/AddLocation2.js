import React, { useState }  from "react";
import "./AddLocation.css";

function AddLocation2() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the name:", name)
  }

//   const getLocation = () => {
//     setLocation(findUser())
//     console.log("this is the location", location)
//   }


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
          <br/>
          <input
        type="text"
        name="notes"
        placeholder="Share some details"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
        </section>
        
        <br/>
        
        <br />
        <p id="status"></p>
        <p id="latlong"></p>
        <p id="address"></p>
        <a id="map-link" target="_blank"></a>
        <br/>
        
        <button type="submit">Submit</button>
        {/* <Locate /> */}
      </form>
    </div>
  );
}

// function Locate({ panTo, setTempMarker }) {
//     return (
//       <button
//         className="locate"
//         onClick={() => {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               setTempMarker({
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//                 time: new Date(),
//               });
//               panTo({
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               });
//             },
//             () =>
//               alert(
//                 "There was an error getting your location. Please check the location settings in your browser."
//               )
//           );
//         }}
//       >
//         Find Me!
//       </button>
//     );
//   }

export default AddLocation2;