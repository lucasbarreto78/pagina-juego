$(document).ready(function () {
  let imgItems = $('.diapositiva li').length//Numero de diapositiva
  let imgPos = 1


  $('.diapositiva li').hide();//Ocultar todas las diapositivas
  $('.diapositiva li:first').show()//Mostrar la primer diasitiva

  //ejecutar todas las  funciones
  $('.arrow-right  span').click(nextSlider)
  $('.arrow-left span').click(prevSlider)

  //Funciones===========================================

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }

    console.log(imgPos)
    $('.diapositiva li').hide();//Ocultar todos las diapositivas
    $('.diapositiva li:nth-child( ' + imgPos + ' )').fadeIn();//Mostrar el slide seleccionado

  }

  function prevSlider() {

    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    console.log(imgPos)


    $('.diapositiva li').hide();//Ocultar todos las diapositivas
    $('.diapositiva li:nth-child( ' + imgPos + ' )').fadeIn();//Mostrar el slide seleccionado

  }


});
