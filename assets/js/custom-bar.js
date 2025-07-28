document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".custom-bar");
  
    // Configuración del observador
    const observerOptions = {
      threshold: 0.5, // 50% visible
    };
  
    const animateBars = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const progress = bar.getAttribute("data-progress");
          bar.style.width = `${progress}%`; // Aplica el porcentaje dinámicamente
          observer.unobserve(bar); // Deja de observar una vez animada
        }
      });
    };
  
    const observer = new IntersectionObserver(animateBars, observerOptions);
  
    // Observa cada barra
    progressBars.forEach((bar) => {
      observer.observe(bar);
    });
  });
  