"use strict";

//parte 1//
const button = document.querySelector(".img");

 button.addEventListener("click", () => {
    console.log(button.classList.contains("borde"))
    
        if (button.classList.contains("borde")==false) {
            console.log("dfrgre")
            button.classList.add("borde");
        } else {
            button.classList.remove("borde")
        }
});

//parte 2//
const cantidad1 = document.querySelector('#cantidad1');
const cantidad2 = document.querySelector('#cantidad2');
const cantidad3 = document.querySelector('#cantidad3');
const total = document.querySelector('#totalNumberSticker');
const frase = document.querySelector ('.stickerWarning');
const button2 = document.querySelector ('.buttonStickers');
var suma = 0

button2.addEventListener("click", () => {
    console.log(cantidad1.value,cantidad2.value,cantidad3.value,suma)
    suma = Number(cantidad1.value)+Number(cantidad2.value)+Number(cantidad3.value)
   if (suma <= 10) { 
    total.textContent = suma
    frase.textContent = "Llevas " + suma + " stickers"
    frase.classList.add("alert-primary")
   } else {
    total.textContent = suma
    frase.textContent = "Llevas demasiados stickers"
    frase.classList.add("alert-danger")
   }
});

//parte 3//

const selector1 = document.querySelector('#selector1');
const selector2 = document.querySelector('#selector2');
const selector3 = document.querySelector('#selector3');
const button3 = document.querySelector('.buttonPassword');
const frase2 = document.querySelector ('.password');
var password = 0

button3.addEventListener("click", () => {
    console.log(selector1.value,selector2.value,selector3.value)
    password = selector1.value + selector2.value + selector3.value
    if (password==911||password==714){
        if (password==911){
            frase2.textContent = "password 1 correcto"}
        if (password==714){
            frase2.textContent = "password 2 correcto"}
    }else{
        frase2.textContent = "password incorrecto"
    }
});
