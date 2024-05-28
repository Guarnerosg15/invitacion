import React, { useState } from 'react';
import './ConfirmarAsistencia.css';

const ConfirmarAsistencia = () => {
  const [nombre, setNombre] = useState('');
  const [asistire, setAsistire] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
  };

  return (
    <div className="confirmar-asistencia">
      <h1>Confirmar Asistencia</h1>
      <p>Espero que puedas venir a compartir conmigo este día inolvidable. Favor de confirmar tu presencia. ¡Muchas Gracias!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre y apellido:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <div>
          Confirmo que:
          <label>
            <input
              type="radio"
              value="Asistiré"
              checked={asistire === 'Asistiré'}
              onChange={(e) => setAsistire(e.target.value)}
              required
            />
            Asistiré
          </label>
          <label>
            <input
              type="radio"
              value="No asistiré"
              checked={asistire === 'No asistiré'}
              onChange={(e) => setAsistire(e.target.value)}
              required
            />
            No asistiré
          </label>
        </div>
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensajeEnviado && <p>¡Mensaje enviado!</p>}
    </div>
  );
};

export default ConfirmarAsistencia;
