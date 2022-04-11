"use strict";

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

for (let index = 0; index < 10; index++) {
    ctx.fillStyle = randomRGBA();
    ctx.beginPath();
    ctx.arc(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight, Math.random() * 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}