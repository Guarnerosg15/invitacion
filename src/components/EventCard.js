// src/components/EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ title, image, place, date, address, mapLink, onMapClick }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="event-image" />
      <p>{place}</p>
      <p>{date}</p>
      <p>{address}</p>
      <button onClick={() => onMapClick(mapLink)}>Ver Mapa</button>
    </div>
  );
};

export default EventCard;
