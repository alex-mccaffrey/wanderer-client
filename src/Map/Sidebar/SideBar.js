import React from "react";
import "./SideBar.css";
import moment from "moment";

function SideBar(props) {
  const markers = props.markers;
  const sideBarZoom = props.sideBarZoom;
  const setSelected = props.setSelected;

  const onClickZoom = (marker) => {
    return sideBarZoom({
      lat: parseFloat(marker.latitude),
      lng: parseFloat(marker.longitude),
    });
  };

  const loadSideMarkers = (markers, onClickZoom) => {
    if (markers.length > 0) {
      return (
        <ul className="sidebar-ul">
          {markers
            .slice(0)
            .reverse()
            .map((marker) => (
              <li
                key={marker.id}
                className="sidebar-markers"
                onClick={() => {
                  onClickZoom(marker);
                  setSelected(marker);
                }}
              >
                {marker.name} was here{" "}
                {moment(marker.timeAdded).format("MMMM Do YYYY, h:mm:ss a")}
              </li>
            ))}
        </ul>
      );
    } else {
      return (
        <h3>
          There are no saved locations yet. Click "Call Out" to add your
          location.
        </h3>
      );
    }
  };

  return (
    <div className="sidebar">
      <>{loadSideMarkers(markers, onClickZoom)}</>
    </div>
  );
}

export default SideBar;
