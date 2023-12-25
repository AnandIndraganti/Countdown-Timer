
const D = document.getElementById("days");
const H = document.getElementById("hours");
const M = document.getElementById("minutes");
const S = document.getElementById("seconds");
const GradDate="30 May 2025";
function countdown() {
    const desiredDate = new Date(GradDate);
    const curDate = new Date(); 
    const Totalseconds = (desiredDate-curDate)/1000;
    const seconds = Math.floor(Totalseconds) % 60;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const hours = Math.floor(Totalseconds/ 3600) % 24;
    const days = Math.floor(Totalseconds / 3600/ 24);
    D.innerHTML = days;  
    H.innerHTML = formatTime(hours);
    M.innerHTML = formatTime(minutes);
    S.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown,1000);
