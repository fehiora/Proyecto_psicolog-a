$(document).ready(function(){
  $('.sidenav').sidenav();
  $('select').formSelect();
});

function validarInformacion(){
  var nombreValido = document.getElementById('icon_prefix').value;
  var telefonoValido = document.getElementById('icon_telephone').value;
  var emailValido = document.getElementById('email_inline').value;
  var seleccion = document.getElementById('seleccionar').value;
  var formulario = document.getElementById('formularioTotal');
    if (nombreValido ==="" || telefonoValido ==="" || emailValido ==="" || seleccion ===""){
      alert('Se deben diligenciar todos los campos ');
      }
      else{
        alert('Gracias por tu visita ');
        formulario.submit();
        }
}
