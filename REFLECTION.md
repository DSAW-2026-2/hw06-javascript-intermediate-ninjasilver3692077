# REFLECTION — HW06 JavaScript Intermediate

## ¿Por qué usé `reduce` en lugar de `forEach`?

En PlayReal necesitaba calcular varias estadísticas a partir de la lista de retos que queda después de aplicar la búsqueda y los filtros. Para cada conjunto visible calculo la cantidad total de retos, la suma de puntos, la cantidad de retos activos y el conteo por categoría.

Para esta operación usé `reduce` porque el objetivo no es solamente recorrer el arreglo, sino transformar todo el arreglo en un único objeto resumen.

### Versión implementada con `reduce`

```js
const summary = items.reduce(
  (accumulator, { category, points, status }) => ({
    total: accumulator.total + 1,
    totalPoints: accumulator.totalPoints + points,
    active: accumulator.active + (status === 'Active' ? 1 : 0),
    byCategory: {
      ...accumulator.byCategory,
      [category]: (accumulator.byCategory[category] || 0) + 1
    }
  }),
  { total: 0, totalPoints: 0, active: 0, byCategory: {} }
);
```

El acumulador comienza con un objeto que representa el resumen vacío. En cada elemento `total` aumenta, `totalPoints` suma los puntos, `active` aumenta si el estado es `Active` y `byCategory` actualiza el contador de la categoría actual. Al terminar, `reduce` devuelve directamente el objeto que necesito para construir el panel de estadísticas.

## La misma operación con `forEach`

```js
const summary = {
  total: 0,
  totalPoints: 0,
  active: 0,
  byCategory: {}
};

items.forEach(({ category, points, status }) => {
  summary.total += 1;
  summary.totalPoints += points;

  if (status === 'Active') {
    summary.active += 1;
  }

  summary.byCategory[category] =
    (summary.byCategory[category] || 0) + 1;
});
```

Esta versión funciona, pero depende de modificar una variable externa durante el recorrido. `forEach` ejecuta una función para cada elemento, pero no expresa por sí mismo que el resultado final del proceso es un único valor.

## ¿Cuál considero más claro?

Para este caso considero más claro `reduce` porque la intención de la operación es producir un resumen del arreglo. El valor inicial, el acumulador y el resultado final están contenidos en una sola operación. `forEach` me parece más apropiado cuando lo importante es realizar un efecto secundario por cada elemento.

Además, el panel de estadísticas se calcula sobre los retos actualmente filtrados, así que cambia inmediatamente cuando cambia la búsqueda o cualquiera de los filtros.
