import React from "react";

///////// Current Location Feature //////////

export default function Locate({ panTo, setTempMarker }) {
  const loading = document.querySelector("#loading");
  const addLoad = document.querySelector("#addLoad");
  const locateServices = (e) => {
    e.preventDefault();
    if (loading) {
        loading.textContent = "Locating....";
        loading.style.fontWeight = "bold";
      
    } else if (addLoad) {
        addLoad.textContent = "Locating....";
        addLoad.style.fontWeight = "bold"
    }
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
        if (loading) {
            loading.textContent =
              "Found you! To add a Call Out, just tap 'Call Out' in the navigation menu."
            loading.style.fontWeight = "bold";
        } else if (addLoad) {
            addLoad.textContent =
              "Found you! If it looks ok, press submit. If it needs some adjustment,you can click or drag your pin around until it's just right."
            addLoad.style.fontWeight = "bold";
        }
      },
      () => {
        if (loading) {
            loading.textContent =
              "Uh oh...looks like there was a problem getting your location";
            loading.style.color = "Red";
        } else if (addLoad) {
            addLoad.textContent =
              "Uh oh...looks like there was a problem getting your location";
            addLoad.style.color = "Red";
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
