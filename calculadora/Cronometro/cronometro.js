
var cronometro ;

function contar() {
    
   var segundos = document.getElementById("segundos").innerHTML;   // la etiqueta de html la traigo a javascrip y la asigno a la variable 
    var minutos = document.getElementById("minutos").innerHTML;
    var horas = document.getElementById("horas").innerHTML;
   var seg =  parseInt (segundos); // convierto las variables de string a enters
   var min =  parseInt (minutos);
   var horas =  parseInt (horas);

   seg ++;
   if ( seg > 59 ){ min++, seg=0} 
   if (min >59){horas++,min=0} 
   if (horas>24){horas=0}

 console.log (seg,min,horas); 

    document.getElementById("segundos").innerHTML= seg; // asignar el html a la variable seg 
    document.getElementById("minutos").innerHTML = min; 
    document.getElementById("horas").innerHTML = horas; 
    cronometro = setTimeout(function(){ contar()},1000); // la funcion setTime me permite ejecutar la funcion despues de 1 segundo 
}
function inicioCronometro (){
    contar(); 
    document.getElementById("ini").disabled = true;
}

function Pausa() {
    clearTimeout(cronometro); // funcion cleartimeout  cancela la funcion setTime antes de que se ejecute nuevamente 
    document.getElementById("ini").disabled = false;
}


function Reinicio(){ 
   seg = 0 ;
   min = 0 ;
   horas = 0 ; 
   document.getElementById("segundos").innerHTML= seg; // cero a las variables y se las asignamos al front 
   document.getElementById("minutos").innerHTML = min; 
   document.getElementById("horas").innerHTML = horas;
}