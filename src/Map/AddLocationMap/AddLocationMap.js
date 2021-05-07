import React, { useState, useEffect } from "react";
import "../FullMap/FullMap.css";
import MapStyles from "../FullMap/mapStyles";
import Locate from "../Locate/Locate";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

export default function AddLocationMap({ name, notes, setNewMarker }) {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "400px",
    height: "400px",
  };

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

  useEffect(() => {
    setNewMarker(tempMarker)
  }, [tempMarker])

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

  const onMapClick = React.useCallback((e) => {
    setTempMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    });
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
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
            draggable={true}
            position={{ lat: tempMarker.lat, lng: tempMarker.lng }}
            icon={{
              url: "/walker.svg",
              scaledSize: new window.google.maps.Size(40, 40),
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

  

  return (
    <div className="Map">
      {/* <Locate panTo={panTo} setTempMarker={setTempMarker} setNewMarker={setNewMarker}/> */}
      <Locate panTo={panTo} setTempMarker={setTempMarker}/>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {renderTempMarker()}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>{name} is here</h2>
                <p>{notes}</p>
                <p>
                  I am here now: {formatRelative(selected.time, new Date())}
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
        {/* <SubmitNewLocation tempMarker={tempMarker}/> */}
    </div>
  );
}