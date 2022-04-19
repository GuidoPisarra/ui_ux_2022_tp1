"use strict";


let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;


for (let index = 0; index < 1000; index++) {
    ctx.fillStyle = rgba(index);
    ctx.fillRect(0,index,canvasWidth,canvasHeight);
}
function rgba(indice) {
    let r = (0 + indice) / 4;
    let g = (0 + indice) / 4 ;
    let b = (0 + indice) / 4 ;
    let a = 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}