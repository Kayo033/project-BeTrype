// MOUSE PC, ABAIXO
// const color = document.querySelector('input')
// let screen = document.querySelector('canvas')

// let defaultColor = 'black'
// let canDraw = false
// let mouseX = 0
// let mouseY = 0

// let ctx = screen.getContext('2d')

// color.onchange = () => defaultColor = color.value

// screen.addEventListener('mousedown', mouseDownEvent)
// screen.addEventListener('mousemove', mouseMoveEvent)
// screen.addEventListener('mouseup', mouseUpEvent)

// function mouseDownEvent(e) {
//     canDraw = true
//     mouseX = e.pageX - screen.offsetLeft
//     mouseY = e.pageY - screen.offsetTop
// }

// function mouseMoveEvent(e) {
//     if (canDraw) {
//         draw(e.pageX, e.pageY)
//     }
// }

// function mouseUpEvent() {
//     canDraw = false
// }

// function draw(x, y) {
//     let pointX = x - screen.offsetLeft
//     let pointY = y - screen.offsetTop

//     ctx.beginPath()
//     ctx.lineWidth = 5
//     ctx.lineJoin = "round"
//     ctx.moveTo(mouseX, mouseY)
//     ctx.lineTo(pointX, pointY)
//     ctx.closePath()
//     ctx.strokeStyle = defaultColor
//     ctx.stroke()

//     mouseX = pointX
//     mouseY = pointY
// }

// function clearBoard() {
//     ctx.setTransform(1, 0, 0, 1, 0, 0)
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
// }

// PARA MOUSE NOTEBOOK, ABAIXO
const color = document.querySelector('input[type="color"]');
let screen = document.querySelector('canvas');

let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value;

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

screen.addEventListener('touchstart', touchStartEvent);
screen.addEventListener('touchmove', touchMoveEvent);
screen.addEventListener('touchend', touchEndEvent);

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function touchStartEvent(e) {
    canDraw = true;
    const touch = e.touches[0];
    mouseX = touch.pageX - screen.offsetLeft;
    mouseY = touch.pageY - screen.offsetTop;
}

function touchMoveEvent(e) {
    if (canDraw) {
        const touch = e.touches[0];
        draw(touch.pageX, touch.pageY);
    }
}

function touchEndEvent() {
    canDraw = false;
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearBoard() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
