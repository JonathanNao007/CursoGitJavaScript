function MostrarPresupuesto(){
    var presupuesto = parseInt(document.getElementById('inPresupuesto').value, 10);
    var noMeses = parseInt(document.getElementById('inMesesDistribuir').value, 10);
    alert('Test de event listener con click...');
}

const btnDistribuirPrep = document.getElementById('distribuirBtn');
btnDistribuirPrep.addEventListener('click', MostrarPresupuesto);

//document.readyState