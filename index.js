// Asegurar que la función esté disponible globalmente en Vite para el onclick de tu HTML
window.toggleLanguage = function () {
    const sphere = document.getElementById('lang-sphere');
    const track = document.getElementById('lang-switch-track');
    const text = document.getElementById('lang-text');
    const flagImg = document.getElementById('flag-img');

    // Función interna que hace el clic secreto una vez que Google responde
    function ejecutarTraduccion() {
        const googleSelect = document.querySelector('.goog-te-combo');

        if (!googleSelect) {
            console.log("Esperando por el motor de traducción...");
            return false; // No ha cargado todavía
        }

        // Si la página NO está en inglés, la cambiamos a Inglés
        if (googleSelect.value !== 'en') {
            // 1. Estética premium hacia la derecha (English)
            sphere.style.transform = 'translateX(96px)';
            track.classList.remove('bg-white/10');
            track.classList.add('bg-black/40', 'border-white/5');
            text.innerText = 'ENGLISH';
            text.classList.remove('pl-12');
            text.classList.add('pr-12');
            setTimeout(() => { flagImg.src = '/assets/usa flag.webp'; }, 150);

            // 2. Traducir de verdad
            googleSelect.value = 'en';
        } else {
            // 1. Estética premium regresa a la izquierda (Español)
            sphere.style.transform = 'translateX(0px)';
            track.classList.remove('bg-black/40', 'border-white/5');
            track.classList.add('bg-white/10');
            text.innerText = 'ESPAÑOL';
            text.classList.remove('pr-12');
            text.classList.add('pl-12');
            setTimeout(() => { flagImg.src = '/assets/esp flag.webp'; }, 150);

            // 2. Regresar al idioma original
            googleSelect.value = 'es';
        }

        // Forzar a la página a reaccionar al cambio de idioma
        googleSelect.dispatchEvent(new Event('change'));
        return true; // Éxito
    }

    // INTENTO INMEDIATO: Si ya cargó, corre de una vez
    const completado = ejecutarTraduccion();

    // PLAN DE RESPALDO: Si no había cargado, revisa cada 100ms hasta que funcione
    if (!completado) {
        const chequearGoogle = setInterval(() => {
            const exito = ejecutarTraduccion();
            if (exito) {
                clearInterval(chequearGoogle); // Apagar el relojito cuando funcione
            }
        }, 100);
    }
};