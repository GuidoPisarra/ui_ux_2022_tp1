"use strict";

let filas = 10;
let columnas = 10;
let matriz = [];
for (let i = 0; i < filas; i++) {
  matriz[i] = [];
  for (let j = 0; j < columnas ; j++) {
    matriz[i][j] = Math.floor(Math.random() * (1000 + 1));
  }
}

let max = -9999;

for (let i = 0; i < filas ; i++) {
  for (let j = 0; j < columnas ; j++) {
    if (max < matriz[i][j]) {
      max = matriz[i][j];
    }
  }
}

function min_max_filas() {
    let min = 9999;
    let max = -9999;
    for (let i = 0; i < filas ; i++) {
        
        for (let j = 0; j < columnas ; j++) {

            if ((i % 2==0)&&(max < matriz[i][j])) {
              max = matriz[i][j];
            }
            if ((i % 2!=0)&&(min > matriz[i][j])) {
                min = matriz[i][j];
            }            
        }
        if (i % 2==0) {
            console.log("el maximo para la fila "+i+" es "+max);
        }else{
            console.log("el minimo para la fila "+i+" es "+min);

        }
    }
}
min_max_filas();
console.log(matriz);
console.log(max);
