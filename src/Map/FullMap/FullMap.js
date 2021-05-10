import React, { useState, useEffect } from "react";
import "./FullMap.css";
import DummyData from "../DummyData";
import MapStyles from "./mapStyles";
import SideBar from "../Sidebar/SideBar";
import Locate from "../Locate/Locate";
import AuthApiService from "../../services/auth-api-service";
import Search from "../Search/Search";
import AddLocation from "../../AddLocation/AddLocation2";
//import AddLocation2 from "../AddLocation/AddLocation2"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

export default function FullMap({ name, notes }) {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "400px",
    height: "400px",
  };

  const getAllMarkers = () => {
    AuthApiService.getMarkers().then((markers) => {
      console.log("markers in getAllMarkers", markers)
      setMarkers(markers);
    });
  };

  useEffect(() => {
    setMarkers(getAllMarkers())
  }, []);

  const [markers, setMarkers] = React.useState([]);
  //const [markers, setMarkers] = React.useState(DummyData);
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
        setCenter(newCenter); /// this is the successful call
      },
      //() => null ///this is the error
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

  // const onMapClick = React.useCallback((e) => {
  //   console.log("setting temp marker on click")
  //   setTempMarker({
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng(),
  //     timeAdded: new Date(),
  //   });
  // }, []);

  const onMapClick = React.useCallback((e) => {
    console.log(e.latLng.lat(), e.latLng.lng())
  })

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
      <Locate panTo={panTo} setTempMarker={setTempMarker} />
      {/* <Search panTo={panTo} />  */}
      <section className="map-and-sidebar">
        <SideBar markers={markers} sideBarZoom={sideBarZoom} />
        {console.log("map is reloading", markers)}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {/* {markers.map((marker) => (
            console.log("marker maker running", marker),
            <Marker
              // key={marker.time.toISOString()}
              key={marker.lat}
              position={{ lat: parseInt(marker.latitude), lng: parseInt(marker.longitude) }}
              // icon={{
              //   url: '/logo.png',
              //   scaledSize: new window.google.maps.Size(30, 30),
              //   origin: new window.google.maps.Point(0,0),
              //   anchor: new window.google.maps.Point(15, 15),
              // }}
              onClick={() => {
                setSelected(marker);
                setCenter({ lat: parseInt(marker.latitude), lng: parseInt(marker.longitude) })
              }}
            />
          ))} */}

             {markers.map((marker) => (
            <Marker
              key={marker.time}
              position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
              onClick={() => {
                setSelected(marker);
                setCenter({ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) })
              }}
            />
          ))}

          {/* {DummyData.map((marker) => (
            <Marker
              key={marker.time}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              onClick={() => {
                setSelected(marker);
                setCenter({ lat: marker.latitude, lng: marker.longitude })
              }}
            />
          ))} */}

          {renderTempMarker()}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>{selected.name} was here.</h2>
                <p>{selected.notes}</p>
                {/* <p>I was here at: {formatRelative(selected.time, new Date())}</p> */}
                <p>
                  {selected.name} was here at: {selected.time}
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </section>
    </div>
  );
}
