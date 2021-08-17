
var timer = document.getElementById('timer');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');
var startStop = document.getElementById('startStop');

var currentTime;
var alarmElement;
var activeAlarm = false;
var alarmSound = new Audio("alarm_clock_ringtone.mp3");
alarmSound.loop = true;

// Show time in display:
function showTime() {
    var now = new Date();
    currentTime = now.toLocaleTimeString();
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}

showTime();

// Add Time (Minutes and Seconds):

function addMinSec(id) {
    var select = id;
    var min = 59;

    for(i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i<10 ? "0" + i : i);
    }
}

// Add Time (Hours):

function addHours(id) {
    var select = id;
    var hr = 12;

    for(i=0; i <= hr; i++) {
        select.options[select.options.length] = new Option(i<10 ? "0" + i : i);
    }
}

addHours(hours);
addMinSec(seconds);
addMinSec(minutes);