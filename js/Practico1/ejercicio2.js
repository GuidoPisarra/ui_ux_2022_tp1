"use strict";


let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

for (let index = 0; index < 1000; index++) {
    ctx.fillStyle = azul();
    ctx.beginPath();
    ctx.fill();
    ctx.closePath();
}

for (let index = 0; index < 1000; index++) {
    ctx.fillStyle = azul();

    ctx.fillRect(index,index,canvasWidth,canvasHeight);
}
function azul() {
    let r = 0;
    let g = 0;
    let b = 255;
    let a = 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}