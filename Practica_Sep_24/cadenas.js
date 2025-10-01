function concatenaCadena(){
    var nombreCl = document.getElementById('nombre').value;
    var aPaternoCl = document.getElementById('aPaterno').value;
    var aMaternoCl = document.getElementById('aMatterno').value;
    //
    var nombreCompleto = nombreCl + aPaternoCl + aMaternoCl;
    var nombreCompleto2 = ''.concat(nombreCl, ' ', aPaternoCl, ' ', aMaternoCl);
    //
    document.getElementById('inNombreCompleto').value = nombreCompleto2;

    console.log(nombreCompleto2.length);
    //document.getElementById('inPosicion').value = nombreCompleto2[3];
    document.getElementById('inPosicion').value = nombreCompleto2.charAt(7);
}