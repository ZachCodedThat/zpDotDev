import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
};

const center = {
  lat: 39.9526,
  lng: -75.1652,
};

function MapElement() {
  return (
    <LoadScript googleMapsApiKey={process.env.PUBLIC_MAP_API_KEY}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={containerStyle}
        clickableIcons="false"
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          draggable: false,
          keyboardShortcuts: false,
          fullscreenControl: false,
        }}
      />
    </LoadScript>
  );
}

export default React.memo(MapElement);
