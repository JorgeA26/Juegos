
function mostrarPantalla() {

    var operadores = ConsultarOperadores();

    console.log(operadores);


    if (operadores.find(x => { return x == "/";})){ // procesa la division

        for (var i = 0; i < operadores.length; i ++){

            if (operadores[i] == "/"){
                operadores[i - 1] = parseFloat(operadores[i - 1]) / parseFloat(operadores[i + 1]);
                operadores.splice(i, 2);
                i = i - 1;
            } 
        }
    } 
    console.log(operadores);

     if (operadores.find(x =>{ return x == "*";})){ // multiplicacion 
    for (var i = 0; i < operadores.length; i ++){
            if (operadores[i] == "*"){
                operadores[i - 1] = parseFloat(operadores[i - 1]) * parseFloat(operadores[i + 1]);
                operadores.splice(i, 2);
                i = i - 1;
            } 
        }
    }
    console.log(operadores);

    if (operadores.find(x =>{ return x == "+";})){ // suma  
    for (var i = 0; i < operadores.length; i ++){
            if (operadores[i] == "+"){
                operadores[i - 1] = parseFloat(operadores[i - 1]) + parseFloat(operadores[i + 1]);
                operadores.splice(i, 2);
                i = i - 1;
            } 
        }
    }
    if (operadores.find(x =>{ return x == "-";})){ // Restaa  
    for (var i = 0; i < operadores.length; i ++){
            if (operadores[i] == "-"){
                operadores[i - 1] = parseFloat(operadores[i - 1]) - parseFloat(operadores[i + 1]);
                operadores.splice(i, 2);
                i = i - 1;
            } 
        }
    }
    document.getElementById("pantalla").value = operadores[0];
} 
  

function ConsultarOperadores(){

        var operacion = [];
        var numeros = "";

        var panelCalculadora = document.getElementById("pantalla").value;
        for (var i = 0; i < panelCalculadora.length; i ++){

            //Es un operador matematico
            if (isNaN(parseFloat(panelCalculadora[i]))){
                operacion.push(numeros);
                operacion.push(panelCalculadora[i]);
                numeros = "";
            }
                

            //Hay un numero
            else{
                numeros += panelCalculadora[i];
            }
        }

        if(numeros != "")
            operacion.push(numeros);

        return operacion;

    }
    function agregarNum(num){
       var imputResultado =  document.getElementById("pantalla").value; 
       document.getElementById("pantalla").value = imputResultado + num;
    }
    function mult(num){
        var imputResultado =  document.getElementById("pantalla").value;
        document.getElementById("pantalla").value = imputResultado * num; 
    }
    function resta(num){
        var imputResultado =  document.getElementById("pantalla").value;
        document.getElementById("pantalla").value = imputResultado - num; 
    }
    function division(num){
        var imputResultado =  document.getElementById("pantalla").value;
        document.getElementById("pantalla").value = imputResultado / num; 
    }
    function clearPantalla (){
        document.getElementById("pantalla").value = ""; 
    }
    function agregarFuncionalidad(operador){
       var imputResultado =  document.getElementById("pantalla").value; 
       document.getElementById("pantalla").value =  imputResultado + "" + operador ;
    }