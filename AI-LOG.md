# AI-LOG — HW06 JavaScript Intermediate

## ¿Usé IA para escribir el `reduce`?

Sí. Utilicé IA como apoyo durante la planeación y revisión de la solución, incluyendo la estructura del `reduce` que calcula las estadísticas de PlayReal.

Revisé cómo funciona el acumulador y cómo cambia con cada reto. El `reduce` recibe un acumulador con `total`, `totalPoints`, `active` y `byCategory`, y en cada iteración actualiza ese resumen usando `category`, `points` y `status` del reto actual.

El objeto inicial es:

```js
{
  total: 0,
  totalPoints: 0,
  active: 0,
  byCategory: {}
}
```

Después de procesar todos los retos, `reduce` devuelve un único objeto que se usa para renderizar el panel de estadísticas.

## ¿Qué método de arrays fue el más difícil de entender?

`reduce`.

`map` fue más fácil de visualizar porque transforma cada elemento en otro elemento. En este proyecto se usa para generar las tarjetas HTML y las opciones de los filtros.

`filter` también fue directo porque cada reto se conserva o se descarta según condiciones booleanas.

`reduce` fue más difícil porque hay que pensar en el estado del acumulador durante todas las iteraciones. La parte que más tuve que revisar fue:

```js
[category]: (accumulator.byCategory[category] || 0) + 1
```

La interpreto como: buscar el conteo existente de esa categoría; si todavía no existe, empezar en cero; después sumar uno.

## Cómo usé la IA

La utilicé para revisar el cumplimiento de la rúbrica, comparar la continuidad de HW06 con PlayReal HW05, revisar el uso de `map`, `filter`, `reduce` y `sort`, y detectar posibles casos límite de los filtros y estadísticas.
