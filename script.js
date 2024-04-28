const imagen = document.querySelector('.imagen img');
const textoTranscrito = document.getElementById('textoTranscrito');

let recognition;

// Iniciar reconocimiento de voz automáticamente
document.addEventListener('DOMContentLoaded', () => {
  if (!recognition) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'es-MX'; // Cambiar idioma si es necesario
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      console.log('Reconocimiento de voz iniciado');
    };

    recognition.onresult = (event) => {
      const lastResult = event.results[event.resultIndex];
      const transcript = lastResult[0].transcript;

      console.log('Transcripción: ' + transcript);

      if (transcript.startsWith('Alexa prende la luz de la recámara.')) {
        imagen.src = 'images/PrenderFocoRecamara.png';
      } else 
      if (transcript.startsWith('Alexa prende la luz de la sala.')) {
        imagen.src = 'images/PrenderFocoSala.png';
      } else 
      if (transcript.startsWith('Alexa prende las luces del jardín.')) {
        imagen.src = 'images/PrenderFocosJardín.png';
      } else 
      if (transcript.startsWith('Alexa, enciende el ventilador.')) {
        imagen.src = 'images/EncenderVentilador.gif';
    } else 
      if (transcript.startsWith('Alexa, abre las cortinas.')) {
        // Crear un elemento de imagen
        //var img = new Image();
        
        // Establecer la ruta de la primera imagen
        imagen.src = 'images/AbrirCortinas.gif';

        // Agregar el elemento de imagen al cuerpo del documento
        document.body.appendChild(imagen);

        // Esperar 2 segundos
        setTimeout(function() {
          // Cambiar la fuente de la imagen después de 2 segundos
          imagen.src = 'images/cortinasAbiertas.png';
        }, 1900);

      }else
      if (transcript.startsWith('Alexa apaga la luz de la recámara.')) {
        imagen.src = 'images/casa.png';
      } else 
      if (transcript.startsWith('Alexa apaga la luz de la sala.')) {
        imagen.src = 'images/casa.png';
      } else 
      if (transcript.startsWith('Alexa apaga las luces del jardín.')) {
        imagen.src = 'images/casa.png';
      } else 
      if (transcript.startsWith('Alexa, apaga el ventilador.')) {
        imagen.src = 'images/casa.png';
    } else 
      if (transcript.startsWith('Alexa, cierra las cortinas.')) {
        // Crear un elemento de imagen
        //var img = new Image();
        
        // Establecer la ruta de la primera imagen
        imagen.src = 'images/AbrirCortinas.gif';

        // Agregar el elemento de imagen al cuerpo del documento
        document.body.appendChild(imagen);

        // Esperar 2 segundos
        setTimeout(function() {
          // Cambiar la fuente de la imagen después de 2 segundos
          imagen.src = 'images/casa.png';
        }, 1900);

      }

      textoTranscrito.textContent = transcript;
    };

    recognition.onerror = (error) => {
      console.error('Error de reconocimiento de voz: ' + error.message);
    };

    recognition.start();
  }
});

