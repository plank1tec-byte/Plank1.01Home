const btnIniciar = document.getElementById('btn-iniciar');
const pantallaInicio = document.getElementById('pantalla-inicio');
const video = document.getElementById('video-fondo');
const textoMarca = document.getElementById('texto-marca');

btnIniciar.addEventListener('click', function() {
    // 1. Ocultamos la pantalla inicial y el botón
    pantallaInicio.classList.add('oculto');

    // 2. Nos aseguramos de que el video tenga sonido y le damos play
    video.muted = false;
    video.play();

    // 3. Hacemos aparecer el texto de Plank1 de forma sincronizada.
    // Aquí está configurado a 2000 milisegundos (2 segundos). 
    // Puedes cambiar este número para que coincida exactamente con el momento de tu voz en off.
    setTimeout(() => {
        textoMarca.classList.remove('oculto');
    }, 2000); 
});