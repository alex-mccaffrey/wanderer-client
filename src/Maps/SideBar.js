import React from "react";
import "./SideBar.css";

function SideBar(props) {

  const markers = props.markers;
  const panTo = props.panTo;

  const onClickPanTo = (marker) => {
    return (
      panTo(
        {
          lat: marker.lat,
          lng: marker.lng,
        },
      )
    );
  };

  const sideBarMarkers = () => {
    return (
      <div>
        {markers.map(
          (marker) => (
              console.log(marker),
            (
              <li
                key={marker.id}
                className="sidebar-markers"
                onClick={() => {onClickPanTo(marker)}}
              >
                This is the marker id; {marker.id}
              </li>
            )
          )
        )}
      </div>
    );
  };
  

  return (
    <div className="sidebar">

      <>{sideBarMarkers()}</>
    </div>
  );
}

export default SideBar;
