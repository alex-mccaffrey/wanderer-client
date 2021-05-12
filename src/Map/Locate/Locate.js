import React from "react";

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {


  const locateServices = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setTempMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          time: new Date(),
        });
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () =>
        alert(
          "There was an error getting your location. Please check the location settings in your browser."
        )
    );
  };

  

  return (
    <div>
    <button className="locate" onClick={(e) => locateServices(e)}>
      Find Me!
    </button>
    {/* <p id="status">
      Locating....
    </p> */}
    </div>
  );
}
