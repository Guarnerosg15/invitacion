import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './MapModal.css';

const MapModal = ({ isOpen, onRequestClose, lat, lng }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1t1wNBn8AHHdODOSLGQCcxpsPiK7IxOo&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat, lng },
          zoom: 15,
        });
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
        });
      };

      return () => {
        document.head.removeChild(script);
        delete window.initMap;
      };
    }
  }, [isOpen, lat, lng]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Mapa de Ubicación"
      className="map-modal"
      overlayClassName="map-overlay"
    >
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
      <div className="close-btn-container">
        <button onClick={onRequestClose} className="close-button">Cerrar</button>
      </div>
    </Modal>
  );
};

export default MapModal;
