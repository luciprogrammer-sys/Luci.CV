---
trigger: always_on
---

🪐 MANIFIESTO DEL PROYECTO: ANTIGRAVITY

Concepto Core: Cero peso visual, interacciones fluidas, profundidad infinita.

Para lograr un verdadero efecto de "antigravedad" en la web, el código y el diseño deben trabajar juntos para eliminar la fricción. Aquí están las reglas estrictas para este proyecto:

1. Regla de Oro en Animaciones (Solo 60 FPS)

Para que los elementos "floten" sin trabarse, está estrictamente prohibido animar propiedades de diseño estructural (margin, padding, top, left, width, height).

Permitido: Solo se animará transform (translate, scale, rotate) y opacity.

Performance: Todo elemento flotante pesado debe llevar la propiedad CSS will-change: transform; para que la tarjeta gráfica (GPU) del usuario lo procese sin lag.

2. Sombras de Levitación (Drop Shadows)

Nada en Antigravity puede tener sombras duras. Las sombras deben simular la distancia entre el objeto y el fondo.

Elevación Baja: box-shadow: 0 10px 30px rgba(0,0,0,0.1);

Elevación Alta (Flotando): box-shadow: 0 30px 60px rgba(0,0,0,0.2); transform: translateY(-10px);

Tip: Las sombras deben tener un toque del color del fondo (color bleed) para que se vean integradas, no solo negro puro.

3. Curvas de Aceleración "Cubic-Bezier"

Olvídate de las animaciones linear o ease por defecto. En el espacio, las cosas flotan y se detienen suavemente.

Usa curvas personalizadas para todo. Ejemplo para un efecto de "flote" o magnético:
transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

Esto hace que el inicio sea rápido pero el final sea extremadamente suave, dando la sensación de que el elemento "aterriza" sin gravedad.

4. El "Vacío" como Herramienta de Diseño (Whitespace)

En el espacio hay mucho vacío. Tu diseño necesita espacio negativo masivo.

No amontones los elementos. Multiplica los márgenes habituales por 1.5x o 2x.

Dale a cada tarjeta, texto o imagen suficiente "aire" para que parezca que está suspendido en la pantalla.

5. Profundidad Óptica (Glassmorphism & Blur)

La gravedad cero se siente mejor cuando hay capas.

Usa el efecto de cristal (backdrop-filter: blur()) en los contenedores superiores para que los elementos que pasan por "debajo" se vean borrosos.

Crea orbes o gradientes difusos (como los de tu CV) en el z-index: -1 moviéndose lentamente en el fondo para dar sensación de vida y volumen.

6. Interacciones Magnéticas

Los botones no solo deben cambiar de color al pasar el cursor; deben "atraer" el mouse o reaccionar a él.

Implementaremos pequeños scripts de JS para que los botones o tarjetas se inclinen ligeramente dependiendo de dónde esté el cursor (Efecto Tilt 3D) o sigan sutilmente el movimiento del ratón.

7. Tipografía Etérea

Evita las fuentes demasiado gruesas o "pesadas" a menos que sean para títulos de impacto masivo.

Usa mucho tracking (letter-spacing) en subtítulos para dar la sensación de amplitud y ligereza.