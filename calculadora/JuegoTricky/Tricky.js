var jugador1 = {
    nombre: "Jugador 1",
    estrategia: "",
    imagenEstrategia: "",
    score: 0,
};

var jugador2 = {
    nombre: "Jugador 2",
    estrategia: "",
    imagenEstategia: "",
    score: 0,
};
var turno = 1;

function seleccionEstrategiaX() {
    jugador1.estrategia = "X";
    jugador1.imagenEstrategia = "X.jpg";
    jugador2.estrategia = "O";
    jugador2.imagenEstrategia = "circulo.jpg";
}

function seleccionEstrategiaO() {
    jugador1.estrategia = "O";
    jugador1.imagenEstrategia = "circulo.jpg";
    jugador2.estrategia = "X";
    jugador2.imagenEstrategia = "X.jpg";
}

function colocarImagenEnCelda(indice) {
    var celda = document.getElementById("celda" + (indice + 1));
    if (ActualizarArray(indice)) {
        if (turno === 1) {
            celda.innerHTML = '<img src="' + jugador1.imagenEstrategia + '" width="50" height="50">';
            turno = 2; // Cambiar al siguiente turno
        } else {
            celda.innerHTML = '<img src="' + jugador2.imagenEstrategia + '" width="50" height="50">';
            turno = 1; // Cambiar al siguiente turno
        }
    }
    var ganador = Combinaciones();
    if (ganador) {
        if (ganador == "X") {
            jugador1.score++;
            document.getElementById("score1").innerHTML = jugador1.score;
            alert("¡JUGADOR 1 GANAAA!");
            deshabilitarTabla();
        }
        else {
            jugador2.score++;
            document.getElementById("score2").innerHTML = jugador2.score;
            alert("¡JUGADOR 2 GANAAA!");
            deshabilitarTabla();
        }
    }
}
var arr = ["", "", "", "", "", "", "", "", ""];
function ActualizarArray(indice) {
    if (arr[indice] == "") { //verifico que la posicion este vacia
        if (turno === 1) {
            arr[indice] = 'X';
        } else {
            arr[indice] = 'O';
        }
        return true;
    }
    return false;
}

function Siguiente() {
    arr = ["", "", "", "", "", "", "", "", ""]; //vacio la array
    for (let i = 1; i <= 9; i++) {
        document.getElementById("celda" + i).innerHTML = ""; // Borro todas las imagenes 
    }
    turno = 1;
    HabilitarTabla();
}
function Reiniciar() {
    arr = ["", "", "", "", "", "", "", "", ""];
    for (let i = 1; i <= 9; i++) {
        document.getElementById("celda" + i).innerHTML = ""; // Borro todas las imagenes 
    }
    turno = 1;
    jugador1.score = 0; // la puntuacion empieza de nuevo a cero
    jugador2.score = 0;
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    HabilitarTabla();
}

function Combinaciones() {
    if (arr[0] !== "" && arr[0] === arr[1] && arr[0] === arr[2]) { //filas
        return arr[0]; //devuelve x
    }
    if (arr[3] !== "" && arr[3] === arr[4] && arr[3] === arr[5]) {
        return arr[3];
    }
    if (arr[6] !== "" && arr[6] === arr[7] && arr[6] === arr[8]) {
        return arr[6];
    }
    if (arr[0] !== "" && arr[0] === arr[3] && arr[0] === arr[6]) {//columnas
        return arr[0];
    }
    if (arr[1] !== "" && arr[1] === arr[4] && arr[1] === arr[7]) {
        return arr[1];
    }
    if (arr[2] !== "" && arr[2] === arr[5] && arr[2] === arr[8]) {
        return arr[2];
    }
    if (arr[0] !== "" && arr[0] === arr[4] && arr[0] === arr[8]) { //diagonales
        return arr[0];
    }
    if (arr[2] !== "" && arr[2] === arr[4] && arr[2] === arr[6]) {
        return arr[2];
    }
    return null;
}
function deshabilitarTabla() {
    document.getElementById("tabla").style.pointerEvents = "none"; //style.pointerEvents deshabilita la interacción del mouse con un elemento.
}
function HabilitarTabla() {
    document.getElementById("tabla").style.pointerEvents = "auto";//style.pointerEvents auto habilita la interacción del mouse con un elemento.
}
