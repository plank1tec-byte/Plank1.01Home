const btnIniciar = document.getElementById('btn-iniciar');
const pantallaInicio = document.getElementById('pantalla-inicio');
const video = document.getElementById('video-fondo');
const pantallaFinal = document.getElementById('pantalla-final');

btnIniciar.addEventListener('click', function() {
    pantallaInicio.classList.add('oculto');
    video.muted = false;
    video.play();
});

video.addEventListener('ended', function() {
    pantallaFinal.classList.remove('oculto');
});