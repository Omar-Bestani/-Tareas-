const $botonDuracionTotal = document.querySelector('#calcular-tiempo-total'); 

$botonDuracionTotal.onclick = function(){

    let horasTotales;
    let minutosTotales;
    let segundosTotales;


        const claseUnoHoras = Number(document.querySelector('#horas-clase-uno').value);
        const claseUnoMinutos = Number(document.querySelector('#minutos-clase-uno').value);
        const claseUnoSegundos = Number(document.querySelector('#segundos-clase-uno').value);

        const claseDosHoras = Number(document.querySelector('#horas-clase-dos').value);
        const claseDosMinutos = Number(document.querySelector('#minutos-clase-dos').value);
        const claseDosSegundos = Number(document.querySelector('#segundos-clase-dos').value);

        const claseTresHoras = Number(document.querySelector('#horas-clase-tres').value);
        const claseTresMinutos = Number(document.querySelector('#minutos-clase-tres').value);
        const claseTresSegundos = Number(document.querySelector('#segundos-clase-tres').value);

        const claseCuatroHoras = Number(document.querySelector('#horas-clase-cuatro').value);
        const claseCuatroMinutos = Number(document.querySelector('#minutos-clase-cuatro').value);
        const claseCuatroSegundos = Number(document.querySelector('#segundos-clase-cuatro').value);

        const claseCincoHoras = Number(document.querySelector('#horas-clase-cinco').value);
        const claseCincoMinutos = Number(document.querySelector('#minutos-clase-cinco').value);
        const claseCincoSegundos = Number(document.querySelector('#segundos-clase-cinco').value);


    horasTotales = claseCincoHoras + claseCuatroHoras + claseTresHoras + claseDosHoras + claseUnoHoras;
    minutosTotales = claseCincoMinutos + claseCuatroMinutos + claseTresMinutos + claseDosMinutos + claseUnoMinutos;
    segundosTotales = claseCincoSegundos + claseCuatroSegundos + claseTresSegundos + claseDosSegundos + claseUnoSegundos;
    
    document.querySelector('#tiempo-total').innerText = horasTotales + minutosTotales/60 + segundosTotales/3600;

    return false;

}