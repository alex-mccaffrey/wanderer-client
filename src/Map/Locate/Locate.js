import React from "react";

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {
  const loading = document.querySelector("#loading");
  const addLoad = document.querySelector("#addLoad");
  const locateServices = (e) => {
    e.preventDefault();
    if (loading) {
      loading.textContent = "Locating....";
    } else if (addLoad) {
      addLoad.textContent = "Locating....";
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
        if (loading) {
          loading.textContent =
            "Found you! To add a Call Out, just tap 'Call Out' in the navigation menu.";
        } else if (addLoad) {
          addLoad.textContent =
            "Found you! If it looks ok, press submit. If it needs some adjustment,you can click or drag your pin around until it's just right.";
        }
      },
      () => {
        if (loading) {
          return (
            (loading.textContent =
              "Uh oh...looks like there was a problem getting your location"),
            alert(
              "There was an error getting your location. Please check the location settings in your browser."
            )
          );
        } else if (addLoad) {
          return (
            (addLoad.textContent =
              "Uh oh...looks like there was a problem getting your location"),
            alert(
              "There was an error getting your location. Please check the location settings in your browser."
            )
          );
        }
      }
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
