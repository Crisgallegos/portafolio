
// Función que muestra escritura de caracteres
document.addEventListener('DOMContentLoaded', function(){
    const typedSpans = document.querySelectorAll('span[data-toggle="typed"]');
  
    typedSpans.forEach(span => {
        const options = JSON.parse(span.getAttribute('data-options'));
        new Typed(span, options);
    });
  });

 
// Función para deslizar menu
$(document).ready(function() {    

    $('.ancla').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 2000);
        return false;
    });
});



