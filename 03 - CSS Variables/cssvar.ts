const controls: NodeListOf<HTMLInputElement> = document.querySelectorAll(".controls input");

controls.forEach((input: HTMLInputElement): void => {
    input.addEventListener("change", handleControl);
    input.addEventListener("mousemove", handleControl);
})

function handleControl() :void {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}