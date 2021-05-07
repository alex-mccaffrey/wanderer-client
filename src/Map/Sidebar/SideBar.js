import React, { useEffect } from "react";
import "./SideBar.css";

function SideBar(props) {
  const markers = props.markers;
  const sideBarZoom = props.sideBarZoom;


  const onClickZoom = (marker) => {
    return sideBarZoom({
      lat: marker.lat,
      lng: marker.lng,
    });
  };

  // const loadSideMarkers = useEffect((markers, onClickPanTo) => {
  //   console.log("loadSideMakers is running");
  //   return (
  //     <ul>
  //       {markers.map((marker) => (
  //         <li
  //           key={marker.id}
  //           className="sidebar-markers"
  //           onClick={() => {
  //             onClickPanTo(marker);
  //           }}
  //         >
  //           This is the marker id; {marker.id}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }, []);


  const loadSideMarkers = (markers, onClickZoom) => {
    console.log("loadSideMakers is running");
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
            This is the marker id; {marker.id}
          </li>
        ))}
      </ul>
    );
  }


 

  return (
    <div className="sidebar">
      <>{loadSideMarkers(markers, onClickZoom)}</>
    </div>
  );
}

export default SideBar;
