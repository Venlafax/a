document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");

    // Tenta autoplay mudo
    video.muted = true;
    video.play().then(() => {
        video.muted = false;  // Se tocar mudo, ativa o som
    }).catch(() => {
        // Se o autoplay falhar, tenta novamente
        video.play().then(() => {
            video.muted = false;  // Ativa o som caso o autoplay tenha sido silencioso
        }).catch(error => console.log("Erro ao reproduzir: ", error));
    });

    // Verifica se o vídeo não está sendo reproduzido e tenta reproduzi-lo
    if (video.paused) {
        video.play().then(() => {
            video.muted = false;  // Ativa o som caso o autoplay tenha sido silencioso
        }).catch(error => console.log("Erro ao reproduzir: ", error));
    }
});
