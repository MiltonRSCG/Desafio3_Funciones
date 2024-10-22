// Cambiar el color de los divs a negro al hacer clic
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

// Función para cambiar el color a negro
function cambiarColorNegro(event) {
  event.target.style.backgroundColor = "black";
}

// Agregar el evento click a cada div
div1.addEventListener("click", cambiarColorNegro);
div2.addEventListener("click", cambiarColorNegro);
div3.addEventListener("click", cambiarColorNegro);
div4.addEventListener("click", cambiarColorNegro);

// Variable global para guardar el color
let colorSeleccionado;

// Función para manejar las teclas presionadas
document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    colorSeleccionado = "pink";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "s") {
    colorSeleccionado = "orange";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "d") {
    colorSeleccionado = "lightblue";
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "q") {
    const nuevoDivMorado = document.createElement("div");
    nuevoDivMorado.style.width = "200px";
    nuevoDivMorado.style.height = "200px";
    nuevoDivMorado.style.backgroundColor = "purple";
    document.body.appendChild(nuevoDivMorado);
  } else if (event.key === "w") {
    const nuevoDivGris = document.createElement("div");
    nuevoDivGris.style.width = "200px";
    nuevoDivGris.style.height = "200px";
    nuevoDivGris.style.backgroundColor = "gray";
    document.body.appendChild(nuevoDivGris);
  } else if (event.key === "e") {
    const nuevoDivCafe = document.createElement("div");
    nuevoDivCafe.style.width = "200px";
    nuevoDivCafe.style.height = "200px";
    nuevoDivCafe.style.backgroundColor = "brown";
    document.body.appendChild(nuevoDivCafe);
  }
});
