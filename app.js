let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === ""){
        alert('Por favor, introduce un nombre valido');
    }else{
        listaAmigos.push(nombreAmigo);
    }

}   
