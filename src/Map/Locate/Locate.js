import React from "react";

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {
  const loading = document.querySelector("#loading");

  const locateServices = (e) => {
    e.preventDefault();
    if (loading) {
      loading.textContent = "Locating....";
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setTempMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          time: new Date(),
          name: "You",
        });
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        loading.textContent = "Found you!";
      },
      () => (
        (loading.textContent = "Uh oh...looks like there was a problem getting your location"),
        alert(
          "There was an error getting your location. Please check the location settings in your browser."
        )
      )
    );
  };

  return (
    <div>
      <button className="locate" onClick={(e) => locateServices(e)}>
        Find Me!
      </button>
    </div>
  );
}
