import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import './map.css'

const Map = (props) => {
      let centerPos = [(props.pos[0] + props.pos_initial[0]) /2, (props.pos[1] + props.pos_initial[1]) /2 ]
      return (
        <DivRelative id="DIVRELATIVE">
          <Cover></Cover>
            <LeafletMap
              center={props.pos_initial}
              zoom={6}
              maxZoom={10}
              attributionControl={true}
              doubleClickZoom={false}
              scrollWheelZoom={false}
              dragging={false}
              zoomControl={false}
              animate={true}
              easeLinearity={0.35}
              >
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {/*
              <Marker position={props.pos}>
              <Popup>
              Current Location.
              </Popup>
              </Marker>
            */}
              <Marker position={props.pos_initial} color={"#cc0000"}>
                <Popup>
                  Starting location.
                </Popup>
              </Marker>
            </LeafletMap>
          </DivRelative> 
    );
}

Map.defaultProps = {
  pos: [30.2241,-92.0198],
  pos_initial: [28.5383, -81.3792]
}

const Cover = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 10000000;
`;

const DivRelative = styled.div`
  position: relative;
`;

export default Map;