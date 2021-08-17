
var alarmSound = new Audio("/AlarmTone/alarm.mp3");
alarmSound.loop = true;

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

//convert military time to standard time

if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}


h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

},1000);


/*functions to get hour, min, secs, 
am or pm, add zero, set alarm time and alarmSound, clear alarm
*/

function addZero(time) {

return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

var select = document.getElementById('alarmHours');
var hrs = 12

for (i=1; i <= hrs; i++) {
select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

}
}
hoursMenu();

function minMenu(){

var select = document.getElementById('alarmMinutes');
var min = 59;

for (i=0; i <= min; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
minMenu();

function secMenu(){

var select = document.getElementById('alarmSeconds');
var sec = 59;

for (i=0; i <= sec; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
secMenu();


function alarmSet() {

var hr = document.getElementById('alarmHours');

var min = document.getElementById('alarmMinutes');

var sec = document.getElementById('alarmSeconds');

var ap = document.getElementById('ampm');


var selectedHour = hr.options[hr.selectedIndex].value;
var selectedMin = min.options[min.selectedIndex].value;
var selectedSec = sec.options[sec.selectedIndex].value;
var selectedAP = ap.options[ap.selectedIndex].value;

var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
console.log('alarmTime:' + alarmTime);

document.getElementById('alarmHours').disabled = true;
document.getElementById('alarmMinutes').disabled = true;
document.getElementById('alarmSeconds').disabled = true;
document.getElementById('ampm').disabled = true;


//when alarmTime is equal to currentTime then play a alarmSound
var h2 = document.getElementById('clock');

/*function to calculate the current time 
then compare it to the alarmTime and play a alarmSound when they are equal
*/

setInterval(function(){

var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//convert military time to standard time

if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}

var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


if (alarmTime == currentTime) {
alarmSound.play();
}

},1000);


// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

document.getElementById('alarmHours').disabled = false;
document.getElementById('alarmMinutes').disabled = false;
document.getElementById('alarmSeconds').disabled = false;
document.getElementById('ampm').disabled = false;
alarmSound.pause();
}


