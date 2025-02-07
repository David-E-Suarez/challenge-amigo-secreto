let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    limpiarCaja();
    
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaNombres.appendChild(li);
    });
}