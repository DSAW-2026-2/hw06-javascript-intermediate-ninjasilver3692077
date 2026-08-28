# REFLECTION — HW06 JavaScript Intermediate

## Operación elegida: construir las estadísticas de los retos visibles

En PlayReal el panel de estadísticas debe cambiar cada vez que el usuario busca, filtra u ordena. Para ello necesitaba recorrer la lista visible y producir un único resumen con el total de retos, la suma de puntos y el conteo por categoría.

### Versión equivalente con `forEach`

```js
function calcularStatsForEach(items) {
  const resumen = {
    total: 0,
    puntosTotales: 0,
    porCategoria: {}
  };

  items.forEach(({ categoria, puntos }) => {
    resumen.total += 1;
    resumen.puntosTotales += puntos;
    resumen.porCategoria[categoria] = (resumen.porCategoria[categoria] || 0) + 1;
  });

  return resumen;
}
```

### Versión con `reduce` usada en `app.js`

```js
const resumen = items.reduce(
  (acumulado, { categoria, puntos }) => ({
    total: acumulado.total + 1,
    puntosTotales: acumulado.puntosTotales + puntos,
    porCategoria: {
      ...acumulado.porCategoria,
      [categoria]: (acumulado.porCategoria[categoria] || 0) + 1
    }
  }),
  { total: 0, puntosTotales: 0, porCategoria: {} }
);
```

## ¿Por qué elegí `reduce`?

`forEach` sirve para ejecutar una acción por cada elemento, pero no está pensado específicamente para transformar todo un arreglo en un único valor. En la versión con `forEach` tengo que crear `resumen` antes de empezar y después modificar ese objeto desde dentro del callback.

Con `reduce`, en cambio, la intención de la operación queda explícita: parto de un acumulador inicial y cada reto produce la siguiente versión del resumen. Al terminar, el resultado de `reduce` ya es exactamente el objeto que necesito para renderizar las estadísticas.

En este caso considero más claro `reduce` porque estoy haciendo una operación de acumulación: varios retos de entrada se convierten en un solo objeto de salida. También me permite calcular en un único recorrido el total de retos, la suma de puntos y el conteo por categoría.

La parte que más atención requiere es recordar que el callback debe devolver el acumulador que utilizará la siguiente iteración. Si se olvida ese `return`, el acumulador de la siguiente vuelta sería `undefined`.
