var clapSound = document.querySelector("#clap-sound");
var hihatSound = document.querySelector("#hihat-sound");
var kickSound = document.querySelector("#kick-sound");
var openhatSound = document.querySelector("#openhat-sound");
var boomSound = document.querySelector("#boom-sound");
var rideSound = document.querySelector("#ride-sound");
var snareSound = document.querySelector("#snare-sound");
var tomSound = document.querySelector("#tom-sound");
var tinkSound = document.querySelector("#tink-sound");
var clapKey = document.querySelector("#clap");
var hihatKey = document.querySelector("#hihat");
var kickKey = document.querySelector("#kick");
var openhatKey = document.querySelector("#openhat");
var boomKey = document.querySelector("#boom");
var rideKey = document.querySelector("#ride");
var snareKey = document.querySelector("#snare");
var tomKey = document.querySelector("#tom");
var tinkKey = document.querySelector("#tink");
function keyTimeOut(key) {
    key.classList.remove("key-press");
}
window.addEventListener('keydown', function (e) {
    console.log(e.key);
    switch (e.key) {
        case "a":
            clapSound.play();
            clapKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, clapKey);
            break;
        case "s":
            hihatSound.play();
            hihatKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, hihatKey);
            break;
        case "d":
            kickSound.play();
            kickKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, kickKey);
            break;
        case "f":
            openhatSound.play();
            openhatKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, openhatKey);
            break;
        case "g":
            boomSound.play();
            boomKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, boomKey);
            break;
        case "h":
            rideSound.play();
            rideKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, rideKey);
            break;
        case "j":
            snareSound.play();
            snareKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, snareKey);
            break;
        case "k":
            tomSound.play();
            tomKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, tomKey);
            break;
        case "l":
            tinkSound.play();
            tinkKey.classList.add("key-press");
            setTimeout(keyTimeOut, 500, tinkKey);
            break;
    }
});
