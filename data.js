/* exported retos */
// Dataset de retos de PlayReal — Tarea 6 (JS Intermediate)
// Cada reto tiene: titulo, categoria, grupo, fechaLimite, estado, puntos, participantes
const retos = [
  { id: 1, titulo: '30 flexiones diarias', categoria: 'Fitness', grupo: 'Los Madrugadores', fechaLimite: '2026-09-02', estado: 'Activo', puntos: 40, participantes: 6 },
  { id: 2, titulo: 'Repasar 2 capitulos de calculo', categoria: 'Estudio', grupo: 'Team Sabana', fechaLimite: '2026-08-20', estado: 'Completado', puntos: 60, participantes: 4 },
  { id: 3, titulo: 'Dibujar un mini comic', categoria: 'Creatividad', grupo: 'Racha Squad', fechaLimite: '2026-09-05', estado: 'Activo', puntos: 35, participantes: 5 },
  { id: 4, titulo: 'Organizar una salida grupal', categoria: 'Social', grupo: 'Reto Semanal', fechaLimite: '2026-08-10', estado: 'Vencido', puntos: 25, participantes: 8 },
  { id: 5, titulo: 'Meditar 10 minutos diarios', categoria: 'Bienestar', grupo: 'Los Constantes', fechaLimite: '2026-09-01', estado: 'Activo', puntos: 30, participantes: 7 },
  { id: 6, titulo: 'Correr 5k sin parar', categoria: 'Fitness', grupo: 'Team Sabana', fechaLimite: '2026-08-15', estado: 'Completado', puntos: 70, participantes: 9 },
  { id: 7, titulo: 'Terminar el proyecto de bases de datos', categoria: 'Estudio', grupo: 'Los Madrugadores', fechaLimite: '2026-09-10', estado: 'Activo', puntos: 90, participantes: 3 },
  { id: 8, titulo: 'Grabar un cover musical', categoria: 'Creatividad', grupo: 'Reto Semanal', fechaLimite: '2026-08-18', estado: 'Completado', puntos: 45, participantes: 4 },
  { id: 9, titulo: 'Invitar a un nuevo integrante', categoria: 'Social', grupo: 'Los Constantes', fechaLimite: '2026-09-08', estado: 'Activo', puntos: 20, participantes: 10 },
  { id: 10, titulo: 'Dormir 8 horas por 5 dias', categoria: 'Bienestar', grupo: 'Racha Squad', fechaLimite: '2026-08-05', estado: 'Vencido', puntos: 35, participantes: 6 },
  { id: 11, titulo: 'Hacer 100 sentadillas en la semana', categoria: 'Fitness', grupo: 'Reto Semanal', fechaLimite: '2026-09-03', estado: 'Activo', puntos: 50, participantes: 5 },
  { id: 12, titulo: 'Leer un articulo academico y resumirlo', categoria: 'Estudio', grupo: 'Racha Squad', fechaLimite: '2026-08-22', estado: 'Completado', puntos: 55, participantes: 4 },
  { id: 13, titulo: 'Escribir un cuento corto', categoria: 'Creatividad', grupo: 'Los Madrugadores', fechaLimite: '2026-08-08', estado: 'Vencido', puntos: 30, participantes: 3 },
  { id: 14, titulo: 'Cocinar para el grupo', categoria: 'Social', grupo: 'Team Sabana', fechaLimite: '2026-09-06', estado: 'Activo', puntos: 40, participantes: 7 },
  { id: 15, titulo: 'Desconectarse de redes un dia completo', categoria: 'Bienestar', grupo: 'Reto Semanal', fechaLimite: '2026-08-19', estado: 'Completado', puntos: 25, participantes: 8 },
  { id: 16, titulo: 'Plancha de 3 minutos', categoria: 'Fitness', grupo: 'Los Constantes', fechaLimite: '2026-09-04', estado: 'Activo', puntos: 45, participantes: 6 },
  { id: 17, titulo: 'Preparar apuntes para el parcial', categoria: 'Estudio', grupo: 'Reto Semanal', fechaLimite: '2026-09-09', estado: 'Activo', puntos: 65, participantes: 5 },
  { id: 18, titulo: 'Editar un video corto', categoria: 'Creatividad', grupo: 'Team Sabana', fechaLimite: '2026-09-07', estado: 'Activo', puntos: 50, participantes: 4 },
  { id: 19, titulo: 'Organizar una noche de juegos', categoria: 'Social', grupo: 'Los Madrugadores', fechaLimite: '2026-08-14', estado: 'Completado', puntos: 30, participantes: 9 },
  { id: 20, titulo: 'Caminar 10.000 pasos diarios', categoria: 'Bienestar', grupo: 'Team Sabana', fechaLimite: '2026-09-11', estado: 'Activo', puntos: 40, participantes: 6 },
  { id: 21, titulo: 'Nadar 1km en la semana', categoria: 'Fitness', grupo: 'Racha Squad', fechaLimite: '2026-08-06', estado: 'Vencido', puntos: 55, participantes: 4 },
  { id: 22, titulo: 'Practicar ingles 20 minutos diarios', categoria: 'Estudio', grupo: 'Los Constantes', fechaLimite: '2026-09-12', estado: 'Activo', puntos: 50, participantes: 5 },
  { id: 23, titulo: 'Disenar un logo para el grupo', categoria: 'Creatividad', grupo: 'Los Constantes', fechaLimite: '2026-08-21', estado: 'Completado', puntos: 35, participantes: 3 },
  { id: 24, titulo: 'Felicitar publicamente a un companero', categoria: 'Social', grupo: 'Racha Squad', fechaLimite: '2026-09-13', estado: 'Activo', puntos: 15, participantes: 10 }
];
