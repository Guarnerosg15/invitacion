import React, { useState } from 'react';
import './Invitacion.css'; // Archivo CSS para estilos

const Invitacion = () => {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  const handleIngresarClick = () => {
    alert("¡Bienvenido a la invitación de Paola!");
    setMostrarBienvenida(false); // Ocultar el modal después de ingresar
  };

  return (
    <div className="invitacion-container">
      {/* Botón para mostrar el modal */}
      <button type="button" className="btn letraSecundaria btn-danger" data-toggle="modal" data-target="#modalBienvenida">
        Ver bienvenida
      </button>

      {/* Modal de Bienvenida */}
      <div className={`modal fade ${mostrarBienvenida ? 'show' : ''}`} id="modalBienvenida" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!mostrarBienvenida}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-audio">
            <h3>Bienvenidos a la invitación de Julieta</h3>
            <div className="text-center mb-3" id="boton-modal">
              <button className="btn btn-gris letraSecundaria btn-primary w-50 rounded-pill b1 text-transform" onClick={handleIngresarClick}>
                INGRESAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="contenido">
        <h1>¡Te invitamos a nuestra Fiesta de 15 años!</h1>
        {/* Otro contenido de la invitación */}
      </div>
    </div>
  );
}

export default Invitacion;
