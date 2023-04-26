const botones = document.querySelectorAll(".desplegar,.cerrar,.oculto");
const navegacion = document.querySelector(".hamburguesa");
const secciones = document.querySelectorAll("section");

botones.forEach((boton, indice) => {
	boton.addEventListener("click", function(){
		navegacion.classList.toggle("desplegado");
	});
});