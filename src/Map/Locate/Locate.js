
import React from "react"

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {
    return (
      <button
        className="locate"
        onClick={() => {
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
        }}
      >
        Find Me!
      </button>
    );
  }