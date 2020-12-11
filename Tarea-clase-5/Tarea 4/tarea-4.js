const $botonResultado = document.querySelector('#mostrar-resultados');

    let $NodeList = document.querySelectorAll('.numero');
    let $Numeros = [];

    for (let i = 0; i < $NodeList.length; i++ ){
        $Numeros.push(Number($NodeList[i].innerText))
    }


$botonResultado.onclick = function(){
    calcularPromedio();
    calcularNumeroMenor();
    calcularNumeroMayor();
    numeroMasFrecuente();

    return false;
}


function calcularPromedio(){
    let totalDeNumero = 0

    for (let i = 0; i < $Numeros.length; i++ ){
        totalDeNumero = totalDeNumero + $Numeros[i];
    }

    const promedio = totalDeNumero / $Numeros.length

    document.querySelector('#calculo-promedio').innerText = `El promedio es ${promedio}`;
}


function calcularNumeroMenor(){
    let numeroMenor;
    let numeroComparado = Infinity;

    for (let i=0; i < $Numeros.length; i++){
        let numeroAnalizado = $Numeros[i];

        if (numeroAnalizado < numeroComparado){
            numeroMenor = numeroAnalizado;
            numeroComparado = numeroMenor;
        }

    }

    document.querySelector('#numero-menor').innerText = `El numero menor es ${numeroMenor}`;

}


function calcularNumeroMayor(){
    let numeroMayor;
    let numeroComparado = -Infinity;

    for (let i=0; i < $Numeros.length; i++){
        let numeroAnalizado = $Numeros[i];

        if (numeroAnalizado > numeroComparado){
            numeroMayor = numeroAnalizado;
            numeroComparado = numeroMayor;
        }

    }

    document.querySelector('#numero-mayor').innerText = `El numero mayor es ${numeroMayor}`;

}


function numeroMasFrecuente() {
 let numeroFrecuente;
 let repeticionesActuales;
 let contador = 0;

    for (let i = 0 ; i < $Numeros.length ; i++) {
            let numeroAnalizado = $Numeros [i];

        for (let j = (i+1) ; j < $Numeros.length ; j++) {
                let numeroComparado = $Numeros [j];

            if (numeroComparado === numeroAnalizado) {
                repeticionesActuales = (contador + 1);
            }

            if (repeticionesActuales > contador) {
                numeroFrecuente = numeroAnalizado;
                contador = repeticionesActuales;
            }
        }
    }

  document.querySelector('#numero-mas-frecuente').innerText = `El numero más frecuente es ${numeroFrecuente}`;

}
