const secondsHand = document.querySelector<HTMLDivElement>("#seconds-hand");
const minutesHand = document.querySelector<HTMLDivElement>("#minutes-hand");
const hoursHand = document.querySelector<HTMLDivElement>("#hours-hand");
const clockFace = document.querySelector<HTMLDivElement>("#clock-face");

for (let i: number = 0; i < 360; i+=30) {
    clockFace.innerHTML += `<div class="clock-mark" style="transform: rotate(${i}deg);"><div class="mark"></div></div>`
}
function showTime (): void {
    const currentTime: Date = new Date();
    const currentSeconds: number = currentTime.getSeconds();
    let secondsDegrees: number = ((currentSeconds / 60) * 360) + 90;
    if (secondsDegrees == 90) {
        secondsHand.style.transition = 'all 0s';
    } else {
        secondsHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const currentMinutes: number = currentTime.getMinutes();
    const minutesDegrees: number = ((currentMinutes/60) * 360) + 90;
    if (minutesDegrees == 90) {
        minutesHand.style.transition = 'all 0s';
    } else {
        minutesHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const currentHour: number = currentTime.getHours();
    console.log('hour: ', currentHour);
    const hourDegrees: number = ((currentHour/12) * 360) + 90;
    if (hourDegrees == 90) {
        hoursHand.style.transition = 'all 0s';
    } else {
        hoursHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(showTime, 1000);
