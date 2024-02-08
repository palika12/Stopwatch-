let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.querySelector('.time');

function startStopwatch() {
    if (!timer) {
        timer = setInterval(runStopwatch, 1000);
    }
}

function runStopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}
