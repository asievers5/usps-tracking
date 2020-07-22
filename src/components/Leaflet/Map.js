import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {
      let centerPos = [(props.pos[0] + props.pos_initial[0]) /2, (props.pos[1] + props.pos_initial[1]) /2 ]
      return (
      <LeafletMap
        center={centerPos}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={props.pos}>
          <Popup>
            Current Location.
          </Popup>
        </Marker>
        <Marker position={props.pos_initial} color={"#cc0000"}>
          <Popup>
            Starting location.
          </Popup>
        </Marker>
        
      </LeafletMap>
    );
}

Map.defaultProps = {
  pos: [30.2241,-92.0198],
  pos_initial: [28.5383, -81.3792]
}

export default Map;