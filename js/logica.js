// ============================================================
// logica.js · Funciones que NO tocan el HTML. Completa los TODO.
// ============================================================

// TODO 1: valida lo escrito. Devuelve un objeto con los errores.
//   titulo   -> obligatorio, mínimo 3 letras (usa .trim())
//   categoria-> no puede ser ""
//   numero   -> debe ser un número mayor que 0
// Ejemplo de resultado: { titulo: "El nombre es obligatorio." }
// Si todo está bien devuelve {} (objeto vacío).
function validar(valores) {
  const errores = {};
  // TODO: titulo
  // TODO: categoria
  // TODO: numero (pista: Number("abc") da NaN; Number.isNaN(...) lo detecta)
  return errores;
}

// TODO 2: convierte lo escrito en un objeto con la misma forma que los de DATOS
// { id, titulo, categoria, subtitulo, etiqueta, numero }
function armarItem(valores, nuevoId) {
  // TODO: devuelve el objeto (return { ... })
}

// TODO 3: devuelve el id más grande de la lista + 1 (1 si la lista está vacía)
function siguienteId(lista) {
  // TODO (pista: Math.max(...lista.map(d => d.id)))
}

// TODO 4: filtra por texto (en titulo, sin importar mayúsculas) y por categoría,
// y ordena por numero si orden es "menor" o "mayor". No modifiques la lista original.
function filtrar(lista, texto, categoria, orden) {
  // Por ahora devuelve la lista completa para que la página abra sin errores.
  // TODO: reemplaza esta línea por el filtro y el orden.
  return lista;
}

if (typeof module !== "undefined") {
  module.exports = { validar, armarItem, siguienteId, filtrar };
}
