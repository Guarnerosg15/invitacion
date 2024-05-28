import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './MusicPlayer.css';

function MusicPlayer({ play }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error('La reproducción automática no está permitida:', error);
            });
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [play]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error('La reproducción automática no está permitida:', error);
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      <button className="play-pause-button" onClick={togglePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <audio ref={audioRef}>
        <source src="/music/cancion.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default MusicPlayer;
