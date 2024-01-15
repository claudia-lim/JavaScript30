const clapSound = document.querySelector<HTMLAudioElement>("#clap-sound")
const hihatSound = document.querySelector<HTMLAudioElement>("#hihat-sound");
const kickSound = document.querySelector<HTMLAudioElement>("#kick-sound");
const openhatSound = document.querySelector<HTMLAudioElement>("#openhat-sound");
const boomSound = document.querySelector<HTMLAudioElement>("#boom-sound");
const rideSound = document.querySelector<HTMLAudioElement>("#ride-sound");
const snareSound = document.querySelector<HTMLAudioElement>("#snare-sound");
const tomSound = document.querySelector<HTMLAudioElement>("#tom-sound");
const tinkSound = document.querySelector<HTMLAudioElement>("#tink-sound");

const clapKey = document.querySelector<HTMLDivElement>("#clap");
const hihatKey = document.querySelector<HTMLDivElement>("#hihat");
const kickKey = document.querySelector<HTMLDivElement>("#kick");
const openhatKey = document.querySelector<HTMLDivElement>("#openhat");
const boomKey = document.querySelector<HTMLDivElement>("#boom");
const rideKey = document.querySelector<HTMLDivElement>("#ride");
const snareKey = document.querySelector<HTMLDivElement>("#snare");
const tomKey = document.querySelector<HTMLDivElement>("#tom");
const tinkKey = document.querySelector<HTMLDivElement>("#tink");

function keyTimeOut (key: HTMLDivElement): void {
    key.classList.remove("key-press");
}
window.addEventListener('keydown', (e) => {
    console.log(e.key);
    switch(e.key) {
        case "a" :
            clapSound.play();
            clapKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, clapKey);
            break;
        case "s" :
            hihatSound.play();
            hihatKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, hihatKey);
            break;
        case "d" :
            kickSound.play();
            kickKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, kickKey);
            break;
        case "f" :
            openhatSound.play();
            openhatKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, openhatKey);
            break;
        case "g" :
            boomSound.play();
            boomKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, boomKey);
            break;
        case "h" :
            rideSound.play();
            rideKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, rideKey);
            break;
        case "j" :
            snareSound.play();
            snareKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, snareKey);
            break;
        case "k" :
            tomSound.play();
            tomKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, tomKey);
            break;
        case "l" :
            tinkSound.play();
            tinkKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, tinkKey);
            break;
        }
})

