import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import MarkerMap from './Marker';

const MexMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAVJbaZpDPJdabuzqPHfbmN6wkyL35dyto",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `180%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    zoom={11}
    center={{ lat: 19.4978, lng:  -99.1269 }}
  >
    <MarkerMap/> 
  </GoogleMap>
  
)

export default MexMap;