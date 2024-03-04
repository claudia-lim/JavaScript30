var controls = document.querySelectorAll(".controls input");
controls.forEach(function (input) {
    input.addEventListener("change", handleControl);
    input.addEventListener("mousemove", handleControl);
});
function handleControl() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty("--".concat(this.name), this.value + suffix);
}
