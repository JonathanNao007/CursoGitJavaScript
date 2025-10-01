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

function calculaIMC(){
     var valorPeso = document.getElementById('inPeso').value;
     var valorAltura = document.getElementById('inAltura').value;
     if((valorPeso == null || valorPeso == '') && (valorAltura == null || valorAltura == '')){
        alert('Debes ingresar un valor para peso y altura!');
        return;
     }
     var peso = parseFloat(valorPeso);
     var altura = parseFloat(valorAltura);
     var imc = peso / (altura**2);
     document.getElementById('outIMC').value = imc;
}

function calculaGradosF(){
    var valorC = document.getElementById('inCentigrados').value;
     if(valorC == null || valorC == ''){
        alert('Debes ingresar un valor para grados centigrados!');
        return;
     }
     var centigrados = parseFloat(valorC);
     var cc = (centigrados*9/5) + 32;
     document.getElementById('outGF').value = cc;
}