/* global retos */
const TODAS = 'todas';

const buscador = document.getElementById('buscador');
const filtroCategoria = document.getElementById('filtro-categoria');
const filtroEstado = document.getElementById('filtro-estado');
const filtroGrupo = document.getElementById('filtro-grupo');
const selectorOrden = document.getElementById('ordenar');
const limpiarFiltros = document.getElementById('limpiar-filtros');
const listaRetos = document.getElementById('lista-retos');
const contador = document.getElementById('contador');
const statsPanel = document.getElementById('stats');

const valoresUnicos = (propiedad) =>
  [...new Set(retos.map((reto) => reto[propiedad]))].sort((a, b) => a.localeCompare(b, 'es'));

const llenarSelect = (select, opciones, etiquetaTodas) => {
  select.innerHTML = [
    `<option value="${TODAS}">${etiquetaTodas}</option>`,
    ...opciones.map((valor) => `<option value="${valor}">${valor}</option>`)
  ].join('');
};

llenarSelect(filtroCategoria, valoresUnicos('categoria'), 'Todas');
llenarSelect(filtroEstado, valoresUnicos('estado'), 'Todos');
llenarSelect(filtroGrupo, valoresUnicos('grupo'), 'Todos');

const obtenerRetosFiltrados = () => {
  const termino = buscador.value.trim().toLowerCase();
  const categoriaElegida = filtroCategoria.value;
  const estadoElegido = filtroEstado.value;
  const grupoElegido = filtroGrupo.value;

  return retos.filter(({ titulo, categoria, estado, grupo }) => {
    const coincideTexto =
      titulo.toLowerCase().includes(termino) || grupo.toLowerCase().includes(termino);
    const coincideCategoria = categoriaElegida === TODAS || categoria === categoriaElegida;
    const coincideEstado = estadoElegido === TODAS || estado === estadoElegido;
    const coincideGrupo = grupoElegido === TODAS || grupo === grupoElegido;

    return coincideTexto && coincideCategoria && coincideEstado && coincideGrupo;
  });
};

const ordenarRetos = (items) => {
  const criterio = selectorOrden.value;
  const copia = [...items];

  const comparadores = {
    'titulo-asc': (a, b) => a.titulo.localeCompare(b.titulo, 'es'),
    'titulo-desc': (a, b) => b.titulo.localeCompare(a.titulo, 'es'),
    'puntos-asc': (a, b) => a.puntos - b.puntos,
    'puntos-desc': (a, b) => b.puntos - a.puntos
  };

  return comparadores[criterio] ? copia.sort(comparadores[criterio]) : copia;
};

const renderRetos = (items) => {
  contador.textContent = `${items.length} reto${items.length === 1 ? '' : 's'} encontrado${items.length === 1 ? '' : 's'}`;

  listaRetos.innerHTML = items.length === 0
    ? '<p class="empty">No se encontraron retos con la búsqueda y filtros actuales.</p>'
    : items
      .map(({ id, titulo, categoria, grupo, fechaLimite, estado, puntos, participantes }) => `
        <article class="reto-card">
          <div class="card-top">
            <span class="challenge-id">Reto #${id}</span>
            <span class="badge badge-${estado.toLowerCase()}">${estado}</span>
          </div>
          <div>
            <span class="chip">${categoria}</span>
            <h3>${titulo}</h3>
          </div>
          <dl class="challenge-details">
            <div>
              <dt>Grupo</dt>
              <dd>${grupo}</dd>
            </div>
            <div>
              <dt>Fecha límite</dt>
              <dd>${fechaLimite}</dd>
            </div>
            <div>
              <dt>Puntos</dt>
              <dd>${puntos}</dd>
            </div>
            <div>
              <dt>Participantes</dt>
              <dd>${participantes}</dd>
            </div>
          </dl>
        </article>
      `)
      .join('');
};

const calcularStats = (items) => {
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

  const promedioPuntos = resumen.total === 0
    ? 0
    : Math.round((resumen.puntosTotales / resumen.total) * 10) / 10;

  return { ...resumen, promedioPuntos };
};

const renderStats = (items) => {
  const { total, puntosTotales, promedioPuntos, porCategoria } = calcularStats(items);

  const chipsCategoria = Object.entries(porCategoria)
    .map(([categoria, cantidad]) => `<span class="stat-chip">${categoria}: ${cantidad}</span>`)
    .join('');

  statsPanel.innerHTML = `
    <article class="stat-card">
      <span class="stat-value">${total}</span>
      <span class="stat-label">Retos mostrados</span>
    </article>
    <article class="stat-card">
      <span class="stat-value">${promedioPuntos}</span>
      <span class="stat-label">Puntos promedio</span>
    </article>
    <article class="stat-card">
      <span class="stat-value">${puntosTotales}</span>
      <span class="stat-label">Puntos disponibles</span>
    </article>
    <article class="stat-card stat-card-wide">
      <span class="stat-label">Retos por categoría</span>
      <div class="stat-chips">${chipsCategoria || '<span class="stat-chip">Sin datos</span>'}</div>
    </article>
  `;
};

const actualizarVista = () => {
  const filtrados = obtenerRetosFiltrados();
  const ordenados = ordenarRetos(filtrados);

  renderRetos(ordenados);
  renderStats(ordenados);
};

const reiniciarControles = () => {
  buscador.value = '';
  filtroCategoria.value = TODAS;
  filtroEstado.value = TODAS;
  filtroGrupo.value = TODAS;
  selectorOrden.value = 'original';
  actualizarVista();
};

buscador.addEventListener('input', actualizarVista);
[filtroCategoria, filtroEstado, filtroGrupo, selectorOrden].forEach((control) => {
  control.addEventListener('change', actualizarVista);
});
limpiarFiltros.addEventListener('click', reiniciarControles);

actualizarVista();
