// ============================================================
// app.js · Conecta el HTML con logica.js. Completa los TODO.
// ============================================================

const CLAVE = "adso27-" + PROYECTO;

const lista = document.getElementById("lista");
const buscador = document.getElementById("buscador");
const selectCategoria = document.getElementById("categoria");
const selectOrden = document.getElementById("orden");
const contador = document.getElementById("contador");
const formulario = document.getElementById("formulario");
const estado = document.getElementById("estado");
document.getElementById("titulo").textContent = PROYECTO;

// ---------- Parte 3 (hazla al final): guardar en el navegador ----------
// TODO 9: cargar() -> si localStorage.getItem(CLAVE) es null devuelve DATOS.slice();
//         si no, devuelve JSON.parse(texto)
// TODO 10: guardar() -> localStorage.setItem(CLAVE, JSON.stringify(registros))
let registros = DATOS.slice();   // cuando termines TODO 9, cambia esto por: cargar()

// ---------- Parte 1: pintar (ya hecho, léelo) ----------
function crearTarjeta(item) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const cat = document.createElement("p");
  cat.className = "categoria";
  cat.textContent = item.categoria;

  const h3 = document.createElement("h3");
  h3.textContent = item.titulo;

  const sub = document.createElement("p");
  sub.textContent = item.subtitulo;

  const etiqueta = document.createElement("p");
  etiqueta.className = "etiqueta";
  etiqueta.textContent = item.etiqueta;

  tarjeta.append(cat, h3, sub, etiqueta);
  // TODO 8: crea un botón "Eliminar" y al hacer click quita el item de registros
  //         (pista: registros.filter), guarda() y vuelve a pintar con actualizar()
  return tarjeta;
}

function pintar(elementos) {
  lista.innerHTML = "";
  contador.textContent = elementos.length + " resultados";
  if (elementos.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.textContent = "No hay resultados con esos filtros.";
    lista.appendChild(vacio);
    return;
  }
  elementos.forEach(item => lista.appendChild(crearTarjeta(item)));
}

function actualizar() {
  pintar(filtrar(registros, buscador.value, selectCategoria.value, selectOrden.value));
}

function llenarCategorias() {
  const categorias = [...new Set(DATOS.map(d => d.categoria))];
  [selectCategoria, document.getElementById("categoria-input")].forEach(function (select) {
    categorias.forEach(function (c) {
      const opcion = document.createElement("option");
      opcion.value = c;
      opcion.textContent = c;
      select.appendChild(opcion);
    });
  });
}

buscador.addEventListener("input", actualizar);
selectCategoria.addEventListener("change", actualizar);
selectOrden.addEventListener("change", actualizar);

// ---------- Parte 2: formulario ----------
function leerFormulario() {
  return {
    titulo: formulario.elements["titulo"].value,
    categoria: formulario.elements["categoria"].value,
    subtitulo: formulario.elements["subtitulo"].value,
    numero: formulario.elements["numero"].value,
  };
}

// TODO 5: mostrarErrores(errores) -> para titulo, categoria y numero:
//   escribe el mensaje en el <p id="error-..."> (o "" si no hay error)
//   y pon/quita la clase "error" en <div id="campo-...">  (classList.toggle)

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const valores = leerFormulario();
  // TODO 6: const errores = validar(valores); mostrarErrores(errores);
  //         si hay errores (Object.keys(errores).length > 0) -> return
  // TODO 7: si todo está bien: registros.push(armarItem(valores, siguienteId(registros)));
  //         guardar(); actualizar(); formulario.reset(); estado.textContent = "Guardado ✔";
});

llenarCategorias();
actualizar();
