import React from "react";

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {
  const loading = document.querySelector("#loading");
  const addLoad = document.querySelector("#addLoad");
  const locateServices = (e) => {
    e.preventDefault();
    if (loading) {
      return (
        (loading.textContent = "Locating...."),
        (loading.style.fontWeight = "bold")
      );
    } else if (addLoad) {
      return (
        (addLoad.textContent = "Locating...."),
        (loading.style.fontWeight = "bold")
      );
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
          return (
            (loading.textContent =
              "Found you! To add a Call Out, just tap 'Call Out' in the navigation menu."),
            (loading.style.fontWeight = "bold")
          );
        } else if (addLoad) {
          return (
            (addLoad.textContent =
              "Found you! If it looks ok, press submit. If it needs some adjustment,you can click or drag your pin around until it's just right."),
            (loading.style.fontWeight = "bold")
          );
        }
      },
      () => {
        if (loading) {
          return (
            (loading.textContent =
              "Uh oh...looks like there was a problem getting your location"),
            (loading.style.color = "Red")
          );
        } else if (addLoad) {
          return (
            (addLoad.textContent =
              "Uh oh...looks like there was a problem getting your location"),
            (loading.style.color = "Red")
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
