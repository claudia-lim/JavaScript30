var clapButton = document.querySelector("#clap");
var clapSound = document.querySelector("#clap-sound");
function onClick() {
    clapSound.play();
}
clapButton.addEventListener("click", onClick);
