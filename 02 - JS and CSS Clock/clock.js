var secondsHand = document.querySelector("#seconds-hand");
var minutesHand = document.querySelector("#minutes-hand");
var hoursHand = document.querySelector("#hours-hand");
var clockFace = document.querySelector("#clock-face");
for (var i = 0; i < 360; i += 30) {
    clockFace.innerHTML += "<div class=\"clock-mark\" style=\"transform: rotate(".concat(i, "deg);\"><div class=\"mark\"></div></div>");
}
function showTime() {
    var currentTime = new Date();
    var currentSeconds = currentTime.getSeconds();
    var secondsDegrees = ((currentSeconds / 60) * 360) + 90;
    if (secondsDegrees == 90) {
        secondsHand.style.transition = 'all 0s';
    }
    else {
        secondsHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    secondsHand.style.transform = "rotate(".concat(secondsDegrees, "deg)");
    var currentMinutes = currentTime.getMinutes();
    var minutesDegrees = ((currentMinutes / 60) * 360) + 90;
    if (minutesDegrees == 90) {
        minutesHand.style.transition = 'all 0s';
    }
    else {
        minutesHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    minutesHand.style.transform = "rotate(".concat(minutesDegrees, "deg)");
    var currentHour = currentTime.getHours();
    console.log('hour: ', currentHour);
    var hourDegrees = ((currentHour / 12) * 360) + 90;
    if (hourDegrees == 90) {
        hoursHand.style.transition = 'all 0s';
    }
    else {
        hoursHand.style.transition = 'all 0.5s cubic-bezier(0.43, 0.45, 0, 1.64)';
    }
    hoursHand.style.transform = "rotate(".concat(hourDegrees, "deg)");
}
setInterval(showTime, 1000);
