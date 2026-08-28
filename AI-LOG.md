# AI-LOG — HW06 JavaScript Intermediate

## ¿Usé IA para escribir o revisar `reduce`?

Sí. Utilicé ChatGPT como apoyo para revisar la estructura de la tarea, comprobar la rúbrica y proponer una versión del panel de estadísticas basada en `reduce`. Después revisé el código para poder explicar qué recibe el acumulador, qué devuelve cada iteración y por qué el valor inicial tiene la forma `{ total: 0, puntosTotales: 0, porCategoria: {} }`.

El `reduce` recibe un reto en cada iteración y devuelve un nuevo resumen. `total` aumenta en uno, `puntosTotales` suma los puntos del reto y `porCategoria` incrementa el contador correspondiente a la categoría actual. El objeto devuelto se convierte en el acumulador de la siguiente iteración.

## ¿Qué método de arreglos fue el más difícil de entender?

`reduce` fue el más difícil. Con `map` sé que obtendré un nuevo arreglo transformado y con `filter` sé que obtendré un subconjunto del arreglo original. `reduce` es menos inmediato porque puede producir un número, un objeto, un arreglo u otro tipo de valor.

Lo entendí mejor al pensar en tres preguntas: ¿con qué valor empieza el acumulador?, ¿qué información agrega el elemento actual? y ¿qué acumulador debo devolver para la siguiente vuelta? En PlayReal esas respuestas son: empezar con un resumen vacío, agregar los datos del reto actual y devolver el resumen actualizado.

## Cómo utilicé la IA

La IA se utilizó como herramienta de apoyo para planear, revisar y mejorar el código. No se tomó el resultado como una respuesta automática: comparé la implementación con la rúbrica, revisé el flujo `dataset → filter → sort → map/render → reduce/stats` y mantuve únicamente el código que puedo explicar.
