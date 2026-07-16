import i18next from 'i18next';

// Tu diccionario oficial de textos premium
const resources = {
    es: {
        translation: {
            "heroTitle": "ADN Tech & Creativo",
            "heroSub": "Diseño y desarrollo experiencias digitales de alta gama...",
            "skillsTitle": "Habilidades & Enfoque Multidisciplinario"
        }
    },
    en: {
        translation: {
            "heroTitle": "Creative & Tech DNA",
            "heroSub": "Designing and engineering premium digital experiences...",
            "skillsTitle": "Skills & Multidisciplinary Focus"
        }
    }
};

// Inicialización real e instantánea
i18next.init({
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    resources: resources
});

// Función para actualizar los elementos con el atributo data-i18n
export function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

export default i18next;