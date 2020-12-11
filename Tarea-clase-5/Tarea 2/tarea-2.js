const $botonEnvioFormulario = document.querySelector('#envio-formulario-usuario'); 

$botonEnvioFormulario.onclick = function(){
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number (document.querySelector('#edad-usuario').value);

    document.querySelector('#resultado').innerText = `Bienvenido ${primerNombreUsuario} ${segundoNombreUsuario} !`;
    document.querySelector('.dato-primerYsegundo-nombre-usuario').innerText = `Nombre | ${primerNombreUsuario} ${segundoNombreUsuario} `;
    document.querySelector('.dato-apellido-usuario').innerText = `Apellido | ${apellidoUsuario}`;
    document.querySelector('.dato-edad-usuario').innerText = `Edad | ${edadUsuario}`; 

    return false;

}