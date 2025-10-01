function covertMetersToKm(){
    //Una variable es un espacio en memoria que sirve para almacenar un valor
    var valorMetros = document.getElementById('cajaMetros').value;
    if(valorMetros == null || valorMetros == ''){
        alert('Debes ingresar un valor en metros!');
        return;
    }
    var metros = parseInt(valorMetros);
    //Operacion
    var kilometros = metros / 1000;
    console.log(kilometros);
    document.getElementById('cajaKilometros').value = kilometros;
}