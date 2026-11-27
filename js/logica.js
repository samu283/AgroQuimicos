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
  if (lista.length === 0) {
    return 1;
  }
  return Math.max(...lista.map(d => d.id)) + 1;
}

// TODO 4: filtra por texto (en titulo, sin importar mayúsculas) y por categoría,
// y ordena por numero si orden es "menor" o "mayor". No modifiques la lista original.
function filtrar(lista, texto, categoria, orden) {
  const buscado = texto.trim().toLowerCase();

  // filter devuelve una lista nueva; una categoría vacía significa "todas"
  const resultado = lista.filter(d =>
    d.titulo.toLowerCase().includes(buscado) &&
    (categoria === "" || d.categoria === categoria)
  );

  // sort cambia la lista sobre la que se usa: aquí es la copia, no la original
  if (orden === "menor") {
    resultado.sort((a, b) => a.numero - b.numero);
  } else if (orden === "mayor") {
    resultado.sort((a, b) => b.numero - a.numero);
  }

  return resultado;
}

if (typeof module !== "undefined") {
  module.exports = { validar, armarItem, siguienteId, filtrar };
}
