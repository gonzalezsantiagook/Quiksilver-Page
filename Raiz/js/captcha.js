"use strict";
tirar_ramdom();
function tirar_ramdom(){
    let mayusculas=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let minusculas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let aleatorio1=Math.floor((Math.random() * 9)+1);
    let aleatorio2=Math.floor((Math.random() * 9)+1);

    let random1 = Math.floor((Math.random() * mayusculas.length));
    let opcion_letra1 = mayusculas[random1];
    let random2 = Math.floor((Math.random() * minusculas.length));
    let opcion_letra2 = minusculas[random2];
    document.querySelector("#primero").innerHTML =opcion_letra1
    document.querySelector("#segundo").innerHTML =aleatorio1
    document.querySelector("#tercero").innerHTML =opcion_letra2
    document.querySelector("#cuarto").innerHTML =aleatorio2
}
let div_respuesta= document.querySelector("#respuesta");

let btn_actualizar=document.querySelector("#btn_recargar");
btn_actualizar.addEventListener("click",e=>{
    div_respuesta.innerHTML=""
    document.querySelector("#input_captcha").value=""
    tirar_ramdom()});
    
let boton=document.querySelector("#form");
boton.addEventListener("submit", comparacion);

function comparacion(e){
    e.preventDefault();
    div_respuesta.innerHTML=""
    let texto=document.querySelector("#texto_captcha").textContent;
    let captcha=document.querySelector("#input_captcha").value;
    if(captcha==texto){
        div_respuesta.innerHTML += `<p class="correcto">Captcha correcto, formulario enviado.</p>`;
    }
    else if(captcha!=texto){
        div_respuesta.innerHTML += `<p class="incorrecto">Captcha incorrecto, vuelve a intentarlo</p>`
        document.querySelector("#input_captcha").value=""
        tirar_ramdom();
    }
}



