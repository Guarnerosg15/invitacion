import React, { useState, useEffect } from 'react';
import './Invitacion.css'; // Importa los estilos CSS para este componente
import { WhatsAppWidget } from 'react-whatsapp-widget'; // Importa el componente WhatsAppWidget
import 'react-whatsapp-widget/dist/index.css'; // Importa los estilos del widget de WhatsApp
import EventCard from './components/EventCard'; // Importa el nuevo componente EventCard
import imagen1 from './images/imagen1.jpg'; // Importa la imagen desde la carpeta images
import misa from './images/misa.jpg'; // Importa la imagen de la misa
import salon from './images/salon.jpg'; // Importa la imagen del salón

const Invitacion = () => {
  const fechaEvento = new Date('2024-07-13T00:00:00'); // Fecha del evento (13 de julio de 2024)

  const formatearFecha = (fecha) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
  };

  const formatearHora = (fecha) => {
    return fecha.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit' });
  };

  const calcularCuentaRegresiva = () => {
    const diferencia = fechaEvento - new Date();
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  };

  const [cuentaRegresiva, setCuentaRegresiva] = useState(calcularCuentaRegresiva());
  const [contadorAsistentes, setContadorAsistentes] = useState(0);
  const [contadorNoAsistentes, setContadorNoAsistentes] = useState(0);
  const [asistenciaConfirmada, setAsistenciaConfirmada] = useState(false);
  const [noAsistiraConfirmado, setNoAsistiraConfirmado] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCuentaRegresiva(calcularCuentaRegresiva());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    alert('¡Bienvenido a la invitación de Paola!');
  }, []); // Se ejecuta solo una vez al montar el componente

  const confirmarAsistencia = () => {
    if (!asistenciaConfirmada) {
      setContadorAsistentes(contadorAsistentes + 1);
      setAsistenciaConfirmada(true);
    }
  };

  const confirmarNoAsistencia = () => {
    if (!noAsistiraConfirmado) {
      setContadorNoAsistentes(contadorNoAsistentes + 1);
      setNoAsistiraConfirmado(true);
    }
  };

  return (
    <div className="invitacion">
      <div className="imagen-animalista">
        {/* <img src="animalista.png" alt="Invitación Animalista" /> */}
      </div>
      <div className="contenido">
        <h1 style={{ margin: '80px', color: 'purple', textAlign: 'center' }}>
          ¡Te invitamos a nuestra Fiesta de 15 años!
        </h1>
        <img src={imagen1} alt="Celebración de 15 años" style={{ display: 'block', margin: '20px auto', maxWidth: '100%' }} />
        <p>¡Hola!</p>
        <p>Celebremos juntos los dulces quince años de Paola con una noche llena de alegría, baile y momentos inolvidables! Los esperamos para compartir esta ocasión tan especial con nosotros.</p>
        <p>Fecha: {formatearFecha(fechaEvento)}<br />
        Hora: {formatearHora(fechaEvento)}</p>
        <div className="cuenta-regresiva">
          <p>{`${cuentaRegresiva.dias} días, ${cuentaRegresiva.horas} horas, ${cuentaRegresiva.minutos} minutos, ${cuentaRegresiva.segundos} segundos`}</p>
        </div>
        <div className="events-container">
          <EventCard
            title="Misa"
            image={misa}
            place="Parroquia Santa María de La Visitación"
            date="13 De  Julio 2024 "
            address="Hidalgo 1, Visitacion, 54890 Melchor Ocampo, Méx."
            mapLink="https://www.google.com.mx/maps/place/Parroquia+Santa+Mar%C3%ADa+de+La+Visitaci%C3%B3n/@19.714796,-99.1359517,1075m/data=!3m1!1e3!4m10!1m2!2m1!1siglesia+de+melchor+ocampo+!3m6!1s0x85d18b32ab95d29f:0x3b713e3765103108!8m2!3d19.7165726!4d-99.1342099!15sChlpZ2xlc2lhIGRlIG1lbGNob3Igb2NhbXBvkgEPY2F0aG9saWNfY2h1cmNo4AEA!16s%2Fg%2F11bbx10hlp?entry=ttu"
          />
          <EventCard
            title="Salón"
            image={salon}
            place="Salón Jardín Macarena"
            date="13 De Julio 2024"
            address="Ejido de Cuautitlan S/N, Lazaro Cardenas, 54870 Cuautitlán, Méx."
            mapLink="https://www.google.com/maps/place/Sal%C3%B3n+Jard%C3%ADn+Macarena/@19.6767025,-99.1764358,1115m/data=!3m2!1e3!4b1!4m6!3m5!1s0x85d1f5718f7efbad:0x9cb4638f9c0ef19b!8m2!3d19.6766975!4d-99.1738609!16s%2Fg%2F11b63s2g4g?hl=es&entry=ttu"
          />
        </div>
        <div className="contadores">
          <p className="contador-asistentes">Asistentes confirmados: {contadorAsistentes}</p>
          <p className="contador-no-asistentes">No asistentes confirmados: {contadorNoAsistentes}</p>
        </div>
               
        <div className="botones-asistencia">
          <button className="confirmar-btn" onClick={confirmarAsistencia} disabled={asistenciaConfirmada}>
            Confirmar Asistencia
          </button>
          <button className="no-asistira-btn" onClick={confirmarNoAsistencia} disabled={noAsistiraConfirmado}>
            No Asistiré
          </button>
        </div>
        <WhatsAppWidget phoneNumber="+525611149709" message="¡Hola! Me gustaría confirmar mi asistencia al evento." />
      </div>
      {/* Agrega el elemento <audio> para la música de fondo */}
      <audio id="musica" loop>
        <source src="/invitaciones/admin/imagenes/18080/MUSICAflowers-official-video (mp3cut.net).mp3" type="audio/mp3" />
      </audio>
      
    </div>
  );
};

export default Invitacion;
