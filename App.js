
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");


function updateTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    hour.innerText = currentHour.toString().padStart(2, 0);
    minute.innerText = currentMinute.toString().padStart(2, 0);
    second.innerText = currentSecond.toString().padStart(2, 0);

}

setInterval(() => {
    updateTime();
    document.querySelector(".colon").classList.toggle("hidden");
}, 1000);