import React, { useState, useEffect, useCallback, useMemo } from 'react';
import QRCode from 'qrcode';
import Modal from 'react-modal';
import './Invitacion.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import EventCard from './components/EventCard';
import IconWithGif from './components/IconWithGif';
import imagen1 from './images/imagen1.jpg';
import misa from './images/misa.jpg';
import salon from './images/salon.jpg';
import imagen2 from './images/imagen2.jpg';
import MapModal from './components/MapModal';
import MusicPlayer from './components/MusicPlayer';

Modal.setAppElement('#root');

const Invitacion = () => {
  const fechaEvento = useMemo(() => new Date('2024-07-13T00:00:00'), []);
  const [playMusic, setPlayMusic] = useState(false);

  const calcularCuentaRegresiva = useCallback(() => {
    const diferencia = fechaEvento - new Date();
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    return { dias, horas, minutos, segundos };
  }, [fechaEvento]);

  const [cuentaRegresiva, setCuentaRegresiva] = useState(calcularCuentaRegresiva());
  const [contadorAsistentes, setContadorAsistentes] = useState(0);
  const [contadorNoAsistentes, setContadorNoAsistentes] = useState(0);
  const [asistenciaConfirmada, setAsistenciaConfirmada] = useState(false);
  const [noAsistiraConfirmado, setNoAsistiraConfirmado] = useState(false);
  const [mapModalIsOpen, setMapModalIsOpen] = useState(false);
  const [currentMapCoords, setCurrentMapCoords] = useState({ lat: 0, lng: 0 });

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCuentaRegresiva(calcularCuentaRegresiva());
    }, 1000);
    return () => clearInterval(intervalo);
  }, [calcularCuentaRegresiva]);

  useEffect(() => {
    const aceptarBienvenida = () => {
      const userAccepted = window.confirm(
        '¡Bienvenido a la invitación de Paola Danae Valtierra Resendiz!\n\n' +
        'Nota importante: Por favor, nadie más puede llevar el color lila o parecido.'
      );
      if (userAccepted) {
        setPlayMusic(true);
      }
    };
    aceptarBienvenida();
  }, []);

  const confirmarAsistencia = () => {
    if (!asistenciaConfirmada && !noAsistiraConfirmado) {
      setAsistenciaConfirmada(true);
    }
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    setContadorAsistentes(contadorAsistentes + cantidad);
    setFormSubmitted(true);

    const qrWindow = window.open('', 'QR Code', 'width=300,height=300');
    qrWindow.document.write('<h3>Tu Código QR para el evento:</h3>');
    qrWindow.document.write('<p>Por favor, toma una captura de pantalla de este código QR y preséntalo en la recepción del evento.</p>');
    const qrCanvas = qrWindow.document.createElement('canvas');
    qrWindow.document.body.appendChild(qrCanvas);
    const qrValue = `Nombre: ${nombre}, Personas: ${cantidad}`;

    QRCode.toCanvas(qrCanvas, qrValue, { errorCorrectionLevel: 'H' }, (error) => {
      if (error) console.error(error);
    });
  };

  const confirmarNoAsistencia = () => {
    if (!asistenciaConfirmada && !noAsistiraConfirmado) {
      setContadorNoAsistentes(contadorNoAsistentes + 1);
      setNoAsistiraConfirmado(true);
    }
  };

  const openMapModal = (lat, lng) => {
    setCurrentMapCoords({ lat, lng });
    setMapModalIsOpen(true);
  };

  const closeMapModal = () => {
    setMapModalIsOpen(false);
  };

  return (
    <div className="invitacion">
      <div className="contenido">
        <h1>¡Te invitamos a nuestra fiesta de 15 años!</h1>
        <img src={imagen1} alt="Evento" className="imagen-principal" />
        <p>Te esperamos para celebrar este día tan especial.</p>
        <p>13 de Julio 2024.</p>
        <div className="cuenta-regresiva">
          <div className="time">
            <span>{cuentaRegresiva.dias}</span>
            <p>Días</p>
          </div>
          <div className="time">
            <span>{cuentaRegresiva.horas}</span>
            <p>Horas</p>
          </div>
          <div className="time">
            <span>{cuentaRegresiva.minutos}</span>
            <p>Minutos</p>
          </div>
          <div className="time">
            <span>{cuentaRegresiva.segundos}</span>
            <p>Segundos</p>
          </div>
        </div>
        <div className="events-container">
          <EventCard
            title="Misa"
            image={misa}
            place="Parroquia Santa María de La Visitación"
            date="13 De Julio 2024 : 17:00pm"
            address="Hidalgo 1, Visitacion, 54890 Melchor Ocampo, Méx."
            onMapClick={() => openMapModal(19.716615751930103, -99.13411613202537)}
          />
          <EventCard
            title="Recepción"
            image={salon}
            place="Salón Jardín Macarena"
            date="13 De Julio 2024 : 19:00pm"
            address="Ejido de Cuautitlan S/N, Lazaro Cardenas, 54870 Cuautitlán, Méx."
            onMapClick={() => openMapModal(19.676710668115614, -99.17391932646271)}
          />
        </div>
        <img src={imagen2} alt="Evento Adicional" className="imagen-adicional" />
        <div className="contadores">
          <p className="contador-asistentes">Asistentes: {contadorAsistentes}</p>
          <p className="contador-no-asistentes">No Asistirán: {contadorNoAsistentes}</p>
        </div>
        <div className="botones-asistencia">
          <button className="confirmar-btn" onClick={confirmarAsistencia} disabled={asistenciaConfirmada || noAsistiraConfirmado || formSubmitted}>
            Confirmar Asistencia
          </button>
          <button className="no-asistira-btn" onClick={confirmarNoAsistencia} disabled={asistenciaConfirmada || noAsistiraConfirmado || formSubmitted}>
            No Asistiré
          </button>
        </div>
        {asistenciaConfirmada && !formSubmitted && (
          <form className="confirmar-form" onSubmit={handleConfirmar}>
            <label>
              Nombre y apellido:
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </label>
            <label>
              Número de personas:
              <input type="number" value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} min="1" required />
            </label>
            <button type="submit" disabled={formSubmitted}>Confirmar</button>
          </form>
        )}
        <WhatsAppWidget 
          phoneNumber="+525611149709" 
          message="¡Hola! Me gustaría confirmar mi asistencia al evento." 
          companyName="Evento de Paola Danae Valtierra Resendiz" 
          replyTimeText="Responderemos lo antes posible" 
          messagePlaceholder="Escribe tu mensaje aquí..." 
        />
      </div>
      <MapModal isOpen={mapModalIsOpen} onRequestClose={closeMapModal} lat={currentMapCoords.lat} lng={currentMapCoords.lng} />
      <IconWithGif />
      <MusicPlayer play={playMusic} />
    </div>
  );
};

export default Invitacion;
