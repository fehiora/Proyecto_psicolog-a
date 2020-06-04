$(document).ready(function(){

    $('.subt').mouseover(function(){
        $(this).css("background", "rebeccapurple").css("color", "white");
    });

    $('.subt').mouseout(function(){
        $(this).css("background", "white").css("color", "rgb(72, 3, 136)");
    });

});

function validarInformacion(){
  var nombreValido = document.getElementById('nombre').value;
  var emailValido= document.getElementById('email').value;
  var comentarioValido= document.getElementById('comentario').value;

    if (nombreValido ==="" || emailValido ==="" || comentarioValido ===""){
      alert('Se deben diligenciar todos los campos ');
      }
      else{
        document.getElementById('mensajeAlerta').style.display = 'block';
        //alert('Gracias por tu visita ');
        }
}

