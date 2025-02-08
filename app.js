let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    // si da clic en el boton añadir y esta vacio, sale el mensaje
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    // alerta en caso de que se quiera añadir un nombre ya estando en la lista
    if (listaAmigos.includes(nombre)) {
        alert(`${nombre} ya existe`);
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    limpiarCaja();
    
}

//limpar caja una vez que se de en el boton añadir
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    
    for (let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaNombres.appendChild(li);
    }
}

function sortearAmigo() {
    //en caso que le den al boton sortear amigo si haber añadido nimgun amigo saldra la siguiente alerta
    if (listaAmigos.length === 0) {
        alert("No ha añadido ningun nombre.");
        return;
    } 
    // sino añade solo un nombre y le dan a boton sortear amigo le saldra la siguiete alarta
    if (listaAmigos.length === 1){
        alert ("Dabe agregra al menos dos nombres para sortear.");
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[amigoAleatorio];
    
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    

    //El juego se renicia en 20 segundos
    setTimeout(reiniciarJuego, 20000);
}

function reiniciarJuego() {
    // inicializar lista de amigos
    listaAmigos = [];
    //limpiar los nombres 
    actualizarListaAmigos();
    //limpiar mensaje de resultado
    document.getElementById("resultado").innerHTML = "";
}



