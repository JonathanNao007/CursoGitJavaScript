function evaluar(){
    console.log('Se accedio a la funcion con el evento...');
    var nombre = document.getElementById('inNombre').value;
    var genero = document.getElementById('inGenero').value;
    var edad = parseInt(document.getElementById('inEdad').value);
    var leyenda = '';
    //
    if(genero === 'masculino'){
        alert('El formulario de la persona '+ nombre +' es de genero masculino.')
    }
    else{
        alert('El formulario de la persona '+ nombre +' es de genero femenino y su edad es '+edad+'.')
    }        
    /* if(edad < 11){
        leyenda = 'Es un niño';
    }
    else{
        leyenda = 'Es un adolecente o adulto mayor.';
    } */
   if(edad < 12){
    leyenda = 'Es un niño';
   }
   else if(edad >= 12 && edad < 18){
    leyenda = 'Es un adolocente';
   }
   else if(edad >= 18 && edad <= 59){
    leyenda = 'Es un adulto';
   }
   else{
    leyenda = 'Es un adulto mayor';
   }
    //
    document.getElementById('txtMensaje').value = 'Persona: '+ nombre+ ', Genero: '+genero+ ', Edad: '+edad+' Etapa de la vida:' + leyenda;
}

var btnEval = document.getElementById('btnEvaluar');
btnEval.addEventListener('click', evaluar);