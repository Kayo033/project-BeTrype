num = 0;

function incremento() {
    num++;
    document.getElementById('valor').innerHTML = `${num}`;

    if (num >= 1) {
        document.getElementById('valor').style.color = 'green';
    }
    if (num == 0) {
        document.getElementById('valor').style.color = 'black';
    }
}

function decremento() {
    num--;
    document.getElementById('valor').innerHTML = `${num}`;

    if (num <= -1) {
        document.getElementById('valor').style.color = 'red';
    }
    if (num == 0) {
        document.getElementById('valor').style.color = 'black';
    }
}