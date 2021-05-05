import React, {useState} from "react";
import "./FullMap.css";
import DummyData from "./DummyData";
import MapStyles from "./mapStyles";
import SideBar from "./SideBar";
import AddLocation2 from "../AddLocation/AddLocation2"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxList,
  ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


export default function FullMap({name, notes}) {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "400px",
    height: "400px",
  };




//   function getCenter(center) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         panTo({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         }); /// this is the successful call
//       },
//       //() => null ///this is the error
//       () => alert("There was an error getting your location")
//     );
//   }
//   const center = getCenter()


  const center = {
    lat: 39.7392,
    lng: -104.9903,
  };


  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true
  };

  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  // const [markers, setMarkers] = React.useState([]);
  const [markers, setMarkers] = React.useState(DummyData);
  const [selected, setSelected] = React.useState(null);
  const [tempMarker, setTempMarker] = React.useState({});

  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);
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
        <Marker
          key={tempMarker.time}
          position={{ lat: tempMarker.lat, lng: tempMarker.lng }}
          onClick={() => {
            setSelected(tempMarker);
          }}
        />
      );
    }
  };

  return (
    <div className="Map">
      {/* <Search panTo={panTo} />   took out search bar, if added back in this needs to be uncommented*/}
      <Locate panTo={panTo} setTempMarker={setTempMarker} />
      <SideBar markers={markers} panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        
      >
        {/* {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            // icon={{
            //   url: '/logo.png',
            //   scaledSize: new window.google.maps.Size(30, 30),
            //   origin: new window.google.maps.Point(0,0),
            //   anchor: new window.google.maps.Point(15, 15),
            // }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))} */}

        {DummyData.map((marker) => (
          <Marker
            key={marker.time}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {renderTempMarker()}

        {selected
          ?
            (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h2>I'm here {name}</h2>
                  <p>I was here at: {formatRelative(selected.time, new Date())}</p>
                  {/* <p>I was here at: {selected.time}</p> */}
                </div>
              </InfoWindow>
            )
          : null}
      </GoogleMap>
    </div>
  );
}


// //////// InfoWindow Form ////////////
// function InfoWindowForm() {

//     const [name, setName] = useState("");
//     const [notes, setNotes] = useState("")

//     return (
//         <form className="infowindow-form">
//             <input 
//                 type="text"
//                 value={name}
//                 placeholder="Name"
//                 id="name"
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//         type="text"
//         name="notes"
//         placeholder="Share some details"
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         />
//         </form>
//     )
// }




///////// Current Location Feature //////////

function Locate({ panTo, setTempMarker }) {
  return (
    <button
      className="locate"
      onClick={() => {
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
          },
          () =>
            alert(
              "There was an error getting your location. Please check the location settings in your browser."
            )
        );
      }}
    >
      Find Me!
    </button>
  );
}


