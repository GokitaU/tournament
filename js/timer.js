window.addEventListener('DOMContentLoaded', function() {
let deadline = '2020-06-01';

// получаем оставшееся время в объекте
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)) % 24),
        days = Math.floor((t/(1000*60*60)) / 24);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
}

// запускаем часы
function setClock(classItem, endtime) {
    let timer = document.querySelector(classItem),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

function updateClock() {
    let t = getTimeRemaining(endtime);
    console.log(t);
    days.textContent = t.days;
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    if(t.total <=0) {
        clearInterval(timeInterval);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
    }
}
}
setClock('.timer', deadline);
});