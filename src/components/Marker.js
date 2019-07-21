import React, { Component } from 'react';
import {  Marker } from "react-google-maps";
import stores from '../store_directory.json';
import './Marker.css';

class MarkerMap extends Component {    
    state = { upModal: false }

    openModal = (name,address) => {
      this.setState({ upModal: true, name, address});
    }
    
    closeModal = () => {
      this.setState({ upModal: false });
      
    } 
    render() {
      return (
        <div>
          {stores.map((element, i) => (
            <Marker
              key={i}
              position={{ lat: element.Coordinates.lat, lng: element.Coordinates.lng }}
              onClick={()=>this.openModal(element.Name,element.Address)}
              />))}
              <Modal 
                upModal={this.state.upModal} 
                handleClose={this.closeModal} >
                <b id={this.props.key}>{this.state.name}</b>
                <p>{this.state.address}</p>
                <button type="button" className="btn btn-dark">Agregar a Favoritos </button>
              </Modal>
          </div>
        )
      }
    }
    
    const Modal = ({ handleClose, upModal, children }) => {
      const stateModalClassName = upModal ? 'modal display-block' : 'modal display-none';
      return (
        <div className={stateModalClassName}>
          <section className='containerModal'>
            {children}
            <button
            type="button" className="btn btn-dark"
              onClick={handleClose}>Cerrar
            </button>
          </section>
        </div>
      );
    }
  export default MarkerMap;