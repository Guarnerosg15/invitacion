// src/components/IconWithGif.js

import React, { useState } from 'react';
import './IconWithGif.css';
// import gif from '../images/musica-on-4.gif'; // Ya no necesitas importar el archivo GIF

const IconWithGif = () => {
  const [showGif, setShowGif] = useState(false);

  const handleIconClick = () => {
    setShowGif(!showGif);
  };

  return (
    <div className="icon-container">
      {/*<div className="icon" onClick={handleIconClick}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>*/}
      {/*{showGif && <img src={gif} alt="GIF" className="gif" />}*/}
    </div>
  );
};

export default IconWithGif;
