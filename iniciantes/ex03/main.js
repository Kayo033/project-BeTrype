const hour = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

setInterval(() => {
    let dataAtual = new Date();
    let hours = dataAtual.getHours();
    let minutes = dataAtual.getMinutes();
    let seconds = dataAtual.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`
    min.innerHTML = `${formatTime(minutes)}`
    seg.innerHTML = `${formatTime(seconds)}`
}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
