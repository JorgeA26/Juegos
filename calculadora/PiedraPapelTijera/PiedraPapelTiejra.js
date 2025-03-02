function jugador1() {
    let valorImagen = document.getElementById('selectJugador1').value;
    document.getElementById('imagen1').setAttribute("src", valorImagen);

}
function jugador2() {
    let valorImagen = document.getElementById('selectJugador2').value;
    document.getElementById('imagen2').setAttribute("src", valorImagen)
}
function myfunction() {
    let x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}
function myfunction2() {
    let x = document.getElementById('name2');
    x.value = x.value.toUpperCase();
}
function PLAY() {

    var selectJugador1 = document.getElementById('selectJugador1').value;
    var selectJugador2 = document.getElementById('selectJugador2').value;
    if (selectJugador1 == 'piedra.jpg' && selectJugador2 == 'tijera.jpg' ||
        selectJugador1 == 'papel.jpg' && selectJugador2 == 'piedra.jpg' ||
        selectJugador1 == 'tijera.jpg' && selectJugador2 == 'papel.jpg'
    ) {
        document.getElementById("resultado").innerHTML = " El ganador es Jugador 1!";

    }
    else {
        document.getElementById("resultado").innerHTML = "El ganador es Jugador 2!";
    }
    if (selectJugador1 == selectJugador2) {
        document.getElementById("resultado").innerHTML = " Es Un Empate! ";
    }
}



