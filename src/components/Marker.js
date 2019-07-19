import React, { Component } from 'react';
import {  Marker } from "react-google-maps";
import stores from '../store_directory.json';

class MarkerMap extends Component {     
    render() {
      return (
        <div>
          {stores.map((element, i) => (
            <Marker
              key={i}
              position={{ lat: element.Coordinates.lat, lng: element.Coordinates.lng }}
              title={element.Name}
            />))}
        </div>
      )
    }
  }
  export default MarkerMap;