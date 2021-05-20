import React, { useState, useEffect } from "react";
import "./FullMap.css";
import MapStyles from "./mapStyles";
import SideBar from "../Sidebar/SideBar";
import Locate from "../Locate/Locate";
import AuthApiService from "../../services/auth-api-service";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import moment from "moment";

export default function FullMap() {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "65vw",
    height: "70vh",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  };

  const getAllMarkers = () => {
    return AuthApiService.getMarkers().then((markers) => {
      setMarkers(markers);
    });
  };

  useEffect(() => {
    setMarkers(getAllMarkers());
  }, []);

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [tempMarker, setTempMarker] = React.useState({});

  const [center, setCenter] = useState({
    lat: 39.7392,
    lng: -104.9903,
  });

  const getCenter = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCenter(newCenter);
      },
      () => alert("There was an error getting your location")
    );
  };

  useEffect(getCenter, []);

  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const markerMap = () => {
    if (markers.length > 0) {
      return markers.map((marker) => (
        <Marker
          key={marker.id}
          // anchor={{
          //   lat: parseFloat(marker.latitude),
          //   lng: parseFloat(marker.longitude),
          // }}
          position={{
            lat: parseFloat(marker.latitude),
            lng: parseFloat(marker.longitude),
          }}
          // icon={{
          //   url: "http://maps.google.com/mapfiles/ms/icons/red.png",
          //   origin: new window.google.maps.Point(0, 0),
          //   anchor: new window.google.maps.Point(22, 22),
          // }}
          onClick={() => {
            setSelected(marker);
            setCenter({
              lat: parseFloat(marker.latitude),
              lng: parseFloat(marker.longitude),
            });
          }}
        />
      ));
    }
  };

  const onMapClick = React.useCallback((e) => {
    setSelected(null);
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  const sideBarZoom = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) });
    mapRef.current.setZoom(13);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  /////Here is the temp marker, aka a single marker on each click, not multiple
  const renderTempMarker = () => {
    if (Object.keys(tempMarker).length > 0) {
      return (
        <div className="tempMarker">
          <Marker
            key={tempMarker.time}
            //anchor={{ lat: tempMarker.lat, lng: tempMarker.lng }}
            position={{ lat: tempMarker.lat, lng: tempMarker.lng }}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(22, 22),
            }}
            onClick={() => {
              setSelected(tempMarker);
            }}
          />
        </div>
      );
    }
  };

  const onMapDragStart = () => {
    setSelected(null);
  };

  return (
    <div className="Map">
      <Locate panTo={panTo} setTempMarker={setTempMarker} />
      <section className="map-and-sidebar">
        <SideBar
          markers={markers}
          sideBarZoom={sideBarZoom}
          setSelected={setSelected}
        />
        <div className="googleMap">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={9}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            onDragStart={onMapDragStart}
          >
            {markerMap()}

            {renderTempMarker()}

            {selected ? (
              <InfoWindow
                position={{
                  lat: parseFloat(selected.lat),
                  lng: parseFloat(selected.lng),
                }}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -20),
                  maxWidth: 200,
                }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div className="infowindow">
                  <p>
                    {selected.name}
                    <br />
                    {selected.notes}
                    <br />
                    <br />
                    Checked in{" "}
                    {moment(selected.timeAdded).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
      </section>
    </div>
  );
}
