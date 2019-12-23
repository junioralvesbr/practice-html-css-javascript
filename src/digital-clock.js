const $hours = document.querySelector('.hours');
const $minutes = document.querySelector('.minutes');
const $seconds = document.querySelector('.seconds');

const digitalClock = () => {
    let timer = new Date();
    $hours.textContent = `${timer.getHours()}`;
    $minutes.textContent = `${timer.getMinutes()}`;
    $seconds.textContent = `${timer.getSeconds()}`;
}
    
setInterval(digitalClock, 1000);
