const clapButton = document.querySelector<HTMLDivElement>("#clap");
const clapSound = document.querySelector<HTMLAudioElement>("#clap-sound")
function onClick(): void {
    clapSound.play();
}

clapButton.addEventListener("click", onClick);
