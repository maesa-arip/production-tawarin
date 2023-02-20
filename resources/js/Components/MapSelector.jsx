import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapSelector = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
    ))}
  </GoogleMap>
));

export default MapSelector;