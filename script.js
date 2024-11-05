document.addEventListener('DOMContentLoaded', function() {
    const botonMapa = document.getElementById('botonMapa');
    const segonaPagina = document.getElementById('segonaPagina');
    const terceraPagina = document.getElementById('terceraPagina');
    const volverSegunda = document.getElementById('volverSegunda');

    botonMapa.addEventListener('click', function() {
        segonaPagina.style.display = 'none';
        terceraPagina.style.display = 'block';
    });

    volverSegunda.addEventListener('click', function() {
        terceraPagina.style.display = 'none';
        segonaPagina.style.display = 'block';
    });
});

function cambiarPagina() {
    document.getElementById('primeraPagina').style.display = 'none';
    document.getElementById('segonaPagina').style.display = 'block';
}

function mostrarMeravella(id) {
    // Ocultar el mapa y todas las páginas de maravillas
    document.getElementById('mapa-container').style.display = 'none';
    var paginas = document.getElementsByClassName('meravella');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = 'none';
    }
    
    // Mostrar solo la página de la maravilla seleccionada
    var paginaMaravilla = document.getElementById(id + '-page');
    if (paginaMaravilla) {
        paginaMaravilla.style.display = 'block';
    } else {
        console.error('No se encontró la página para la maravilla: ' + id);
    }
}

function tornarAlMapa() {
    // Ocultar todas las páginas de maravillas
    var paginas = document.getElementsByClassName('meravella');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = 'none';
    }
    
    // Mostrar el mapa
    document.getElementById('mapa-container').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    // Verifica si hay un hash en la URL (por ejemplo, #mapa-container)
    if(window.location.hash) {
        // Si existe, encuentra el elemento con ese id
        var element = document.querySelector(window.location.hash);
        if(element) {
            // Asegúrate de que el elemento sea visible
            element.style.display = 'block';
            // Desplázate suavemente hasta el elemento
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
});