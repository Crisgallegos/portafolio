document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // Cantidad de partículas, ajusta si es necesario
                "density": { "enable": true, "value_area": 800 }
            },
            "color": {
                "value": "#ffffff" // ¡IMPORTANTE! Partículas blancas para que se vean sobre el degradado azul
            },
            "shape": {
                "type": "circle", // o "star", "polygon" para un toque más tech
                "stroke": { "width": 0, "color": "#000000" },
                // Puedes jugar con esto si quieres formas más geométricas:
                // "polygon": { "nb_sides": 5 }
            },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false } },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff", // Líneas blancas
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3, // Velocidad de movimiento
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": { "enable": false }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
                "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 4 },
                "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });
});