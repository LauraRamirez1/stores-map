import React from 'react';
import logo from './logo.svg';
import './App.css';
import MexMap from './components/MexMap';
 
function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">STORES-MAP</span>
      </nav>
      <div className="row">
        <div className="col-8">
          <MexMap></MexMap>
        </div>
        <div className="col-4">
          <h5>FAVORITE STORES</h5>
        </div>
      </div>
    </div>
  )
}
export default (App)