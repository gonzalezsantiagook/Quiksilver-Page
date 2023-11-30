"use strict";
const url ='https://62b1c149c7e53744afc04e4d.mockapi.io/api/guia_talles';
let rta_dom=document.querySelector("#rta_form");

document.querySelector("#form_tabla").addEventListener("submit", agregar);
document.querySelector("#agregar3").addEventListener("click", agregar3);
document.querySelector("#borrar_fila").addEventListener("click", borrar_fila);
document.querySelector("#form_modificar").addEventListener("submit", modificar);

mostrar_tabla();
async function mostrar_tabla(){
    let contenedor_tabla= document.querySelector("#guia_talles");
    contenedor_tabla.innerHTML="<p>LOADING</p>"
    try{
        let response= await fetch(url);
        let json= await response.json();
        contenedor_tabla.innerHTML=""
        for (const item of json) {
            let color;
            if(item.talle=="xl"){
                color="fila_pintada"
            }
            else{
                color="normal"
            }
            contenedor_tabla.innerHTML+=`<tr class="${color}">
                             <td>${item.talle}</td>
                                <td>${item.pecho}</td>
                                <td>${item.cintura}</td>
                                <td>${item.cadera}</td>
                                <td>${item.largo}</td>
                                <td>${item.id}</td>
                                </tr>`;                            
        }      
    }
    catch(error){
        console.log(error);
    }
}

async function borrar_fila(e){
    e.preventDefault();
    let id=document.querySelector("#numero_fila").value
    rta_dom.innerHTML=""
    try{
        let response= await fetch(`${url}/${id}`,{
            "method": "DELETE"
        });
        if(response.status===200){
            rta_dom.innerHTML="Eliminado"
        }
        else if(response.status===404){
            rta_dom.innerHTML="Ese numero no existe"
        }
    }
    catch(error){
        console.log(error)
    }
    mostrar_tabla();
}

async function agregar(e){
    e.preventDefault();
    let talle_nuevo=document.querySelector("#talle").value;
    let pecho_nuevo=document.querySelector("#pecho").value;
    let cintura_nuevo=document.querySelector("#cintura").value;
    let cadera_nuevo=document.querySelector("#cadera").value;
    let largo_nuevo=document.querySelector("#largo").value;
    rta_dom.innerHTML=""   
    let talle={
        "talle": talle_nuevo,
        "pecho": pecho_nuevo,
        "cintura": cintura_nuevo,
        "cadera": cadera_nuevo,
        "largo": largo_nuevo
    }
    try{
        let response=await fetch(url, {
            "method": "POST",
            "headers": {"Content-type":"application/json" },
            "body":JSON.stringify(talle)
        });
        if(response.status===201){
            rta_dom.innerHTML="Agregado"
        }
    }
    catch(error){
        console.log(error)
    }
     mostrar_tabla();
}

async function agregar3(e){
    e.preventDefault();
    rta_dom.innerHTML=""
    let talle={
        "talle": "super xl",
        "pecho": "89cm",
        "cintura": "85cm",
        "cadera":" 89cm",
        "largo": "98cm",
    }
    let talle2={
        "talle":"super xxl",
        "pecho": "92cm",
        "cintura": "88cm",
        "cadera":" 92cm",
        "largo": "101cm"
    }
    let talle3={
        "talle":"hyper xl",
        "pecho": "95cm",
        "cintura": "91cm",
        "cadera":"95cm",
        "largo": "104cm"
    }
    try{
        let response=await fetch(url, {
            "method": "POST",
            "headers": {"Content-type":"application/json" },
            "body":JSON.stringify(talle)
        });
        let response2=await fetch(url, {
            "method": "POST",
            "headers": {"Content-type":"application/json" },
            "body":JSON.stringify(talle2)
        });
        let response3=await fetch(url, {
            "method": "POST",
            "headers": {"Content-type":"application/json" },
            "body":JSON.stringify(talle3)
        });
        if(response.status===201){
            rta_dom.innerHTML="3 items agregados"
        }
    }
    catch(error){
        console.log(error)
    }
    mostrar_tabla();
}

async function modificar(e){
    e.preventDefault();
    let id=document.querySelector("#elegir_id").value;
    let talle_nuevo=document.querySelector("#talle2").value;
    let pecho_nuevo=document.querySelector("#pecho2").value;
    let cintura_nuevo=document.querySelector("#cintura2").value;
    let cadera_nuevo=document.querySelector("#cadera2").value;
    let largo_nuevo=document.querySelector("#largo2").value;
    rta_dom.innerHTML=""
    let talle={
        "talle": talle_nuevo,
        "pecho": pecho_nuevo,
        "cintura": cintura_nuevo,
        "cadera": cadera_nuevo,
        "largo": largo_nuevo
    }
    try{
        let response= await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": {"Content-type":"application/json" },
            "body":JSON.stringify(talle)
        });
        if(response.status===200){
            rta_dom.innerHTML="Modificado"
        }
        else if(response.status===404){
            rta_dom.innerHTML="El id no existe"
        }
    }
    catch(error){
        console.log(error)
    }
    mostrar_tabla();
}




