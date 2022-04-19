"use strict";


let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let imageData = ctx.createImageData(canvasWidth, canvasHeight);


let r = 0;
let g = 0;
let b = 0;
let a = 255;
function drawRect(imageData, r, g, b, a) {

    for (let x = 0; x < canvasWidth; x++) {
        let r;
        let g;
        let b;
        let a = 255;
        for (let x=0; x<canvasWidth; x++){
            
        }
        
        for (let y = 0; y < canvasHeight; y++) {
            let coeficiente= 255 / (canvasWidth);
            r = y * coeficiente;
            g = y * coeficiente;
            b = y* coeficiente;
            setPixel(imageData, x, y, r, g, b, a);
        }

    }
}
            


function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);