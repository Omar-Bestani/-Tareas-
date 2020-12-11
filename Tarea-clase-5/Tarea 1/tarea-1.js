 const $botonCalcular = document.querySelector('#calcular-salario-mensual'); 

$botonCalcular.onclick = function(){
  const salarioAnual = Number (document.querySelector('#salario-anual').value); 
    
  const salarioMensual = (salarioAnual / 12);

  document.querySelector('#salario-mensual').value = salarioMensual;

  return false; 
}
