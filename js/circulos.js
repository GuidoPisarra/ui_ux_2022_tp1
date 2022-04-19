"use strict";

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

for (let index = 0; index < 1000; index++) {
    ctx.fillStyle = randomRGBA();
    ctx.beginPath();
    ctx.arc(Math.round(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight),20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

for (let index = 0; index < 1000; index++) {
    ctx.fillStyle = randomRGBA();
    ctx.fillRect(Math.round(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight), Math.round(Math.random()*50),Math.round(Math.random()* 50));
}

function randomRGBA() {
    let r = 0;
    let g = 0;
    let b = 255;
    let a = 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

let btnAzul= document.querySelector("#buscarAzul");
btnAzul.addEventListener('click', function(e) {
        e.preventDefault();
        var imgData = ctx.getImageData(10, 10, 50, 50);
        ctx.putImageData(imgData, 10, 70);
        
        
    


});






