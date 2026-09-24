// Buscador de estudios en el índice de cada fiesta
const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".container-estudios .card-estudio-original");
const sinResultados = document.getElementById("sin-resultados");

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

buscador.addEventListener("input", () => {
  const consulta = normalizar(buscador.value.trim());
  let visibles = 0;
  tarjetas.forEach((tarjeta) => {
    const coincide = !consulta || normalizar(tarjeta.textContent).includes(consulta);
    tarjeta.hidden = !coincide;
    if (coincide) visibles++;
  });
  sinResultados.hidden = visibles > 0;
});
