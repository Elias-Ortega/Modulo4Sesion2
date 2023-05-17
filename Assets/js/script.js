


 const botonMostrar = document.querySelector("#btnMostrar");

botonMostrar.addEventListener('click', function () {
    const cantidadSemanas = document.querySelector("#semanas").value;
    const cantidadDias = document.querySelector("#dias").value;
    console.log(`Semanas: ${cantidadSemanas}`);
    console.log(`Días: ${cantidadDias}`);

    let rutina = ['sentadilla', 'banco', 'peso muerto', 'prensa'];

    function* generador() {
        let i = 0;
        while (true) {
            yield rutina[i % rutina.length];
            i++;
        }
    }

    let gen1 = generador();
    let contadorDia = 1;
    for (let semana = 1; semana <= cantidadSemanas; semana++) {
        console.log(`Semana: ${semana}`);
        for (let i = 0; i < cantidadDias; i++) {
            console.log(`Día ${contadorDia}: ${gen1.next().value}`);
            contadorDia++;
        }
        
        contadorDia = contadorDia + (cantidadDias -1);
    }
}); 


