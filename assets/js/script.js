const ele = document.getElementById("ele1");

// Establecer el color de fondo a verde por defecto al cargar la página
ele.style.backgroundColor = "green";

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

// Cambia el color a amarillo al hacer clic
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
