import React, { useEffect } from "react";
import "./SideBar.css";
import moment from "moment";

function SideBar(props) {
  const markers = props.markers;
  const sideBarZoom = props.sideBarZoom;


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
        {markers.map((marker) => (
          <li
            key={marker.id}
            className="sidebar-markers"
            onClick={() => {
              onClickZoom(marker);
            }}
          >
            {marker.name} was here {moment(marker.timeAdded).format('MMMM Do YYYY, h:mm:ss a')}
          </li>
        ))}
      </ul>
    );
      }
      else {
        return (
          <h3>There are no saved locations yet.</h3>
        )
      }
  };

  return (
    <div className="sidebar">
      <>{loadSideMarkers(markers, onClickZoom)}</>
    </div>
  );
}

export default SideBar;
