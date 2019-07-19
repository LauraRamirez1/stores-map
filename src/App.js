import React from 'react';
import logo from './logo.svg';
import './App.css';
import MexMap from './components/MexMap';
 
function App() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">STORES-MAP</span>
      </nav>
      <div className="row">
        <div className="col-8">
          <MexMap></MexMap>
        </div>
        <div className="col-4">
          <h5>MIS TIENDAS FAVORITAS</h5>
        </div>
      </div>
    </div>
  )
}
export default (App)