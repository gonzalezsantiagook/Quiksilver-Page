"use strict";
//desplegar menu
document.querySelector(".menu_burger").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
    document.querySelector(".menu_burger").classList.toggle("open");
}
//mostrar formulario
document.querySelector(".espejo").addEventListener("click", mostrarFormulario);
document.querySelector(".relleno").addEventListener("click", mostrarFormulario);
function mostrarFormulario(){
    document.querySelector(".organizar_form").classList.toggle("mostrar")    
    document.querySelector(".respuesta_form").classList.toggle("mostrar")    
}
