// script.js
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    const playButton = document.getElementById("playButton");

    // Função para reproduzir o vídeo com som
    function playVideo() {
        video.muted = false;  // Garante que o som será ativado
        video.volume = 1.0;  // Volume máximo
        video.play().then(() => {
            playButton.style.display = "none"; // Esconde o botão após iniciar
        }).catch(error => console.log("Erro ao reproduzir: ", error));
    }

    // Tenta autoplay mudo
    video.muted = true;
    video.play().then(() => {
        video.muted = false; // Se tocar mudo, ativa o som
    }).catch(() => {
        // Se o autoplay falhar, exibe o botão
        playButton.style.display = "block";
        playButton.addEventListener("click", playVideo);
    });

    // Garante que o clique em qualquer lugar também inicie o vídeo
    document.body.addEventListener("click", playVideo, { once: true });
});
