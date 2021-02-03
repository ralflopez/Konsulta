import React, { useEffect, useState } from 'react';
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import { Icon } from 'leaflet';

function Map() {
  let [location, setLocation] = useState([0,0])

  useEffect(() => {
    
  }, [])

  return (
    <></>
    // <MapContainer center={location} zoom={20}>
    //   <TileLayer 
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    //   />
    //   <Marker position={location} />
    // </MapContainer>
  );
}

export default Map;