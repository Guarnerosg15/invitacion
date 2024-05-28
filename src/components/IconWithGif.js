import React from 'react';
import './IconWithGif.css';

const IconWithGif = () => {
  return (
    <div className="icon-container">
      {/* Uncomment the code below if you want to use the icon and gif again */}
      {/*<div className="icon" onClick={() => setShowGif(!showGif)}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {showGif && <img src={gif} alt="GIF" className="gif" />}*/}
    </div>
  );
};

export default IconWithGif;
