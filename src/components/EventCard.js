// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, image, place, date, address, mapLink }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p><strong>Lugar:</strong> {place}</p>
      <p><strong>Fecha:</strong> {date}</p>
      <p><strong>Dirección:</strong> {address}</p>
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        Ver en Google Maps
      </a>
    </div>
  );
};

export default EventCard;
