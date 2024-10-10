// Explicación:
// ** Con esta funcion se abren cualquiera de los paneles y se muestran, todos si se abren todos

// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// } 


//** Ahora, cada panel solo puede abrirse si todos los demás paneles están cerrados. Esto se puede lograr con el código siguiente:
// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     // Close all other open panels
//     // Cerrar todos los otros paneles
//     var panels = document.getElementsByClassName("panel");
//     for (var j = 0; j < panels.length; j++) {
//       panels[j].style.maxHeight = null;
//     }
//     // Toggle the current panel
//     // Alternar el panel actual
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// Explicación:
// Esto es lo que ha cambiado:
// Agregué un nuevo bucle que cierra todos los demás paneles abiertos al configurarlos maxHeighten null. Esto garantiza que solo se pueda abrir un panel ⬤
// Mantuve el código original que alterna la maxHeightpropiedad del panel actual 


// ** Para mantener la funcionalidad actual de cerrar todos los demás paneles cuando se abre uno, pero también permitir al usuario cerrar el panel actualmente abierto
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all other open panels
    // Cerrar todos los otros paneles abiertos
    var panels = document.getElementsByClassName("panel");
    for (var j = 0; j < panels.length; j++) {
      if (panels[j] !== this.nextElementSibling) {
        panels[j].style.maxHeight = null;
      }
    }
    // Toggle the current panel
    // Alternar el panel actual
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Explicación:
// El cambio clave está en el bucle interno donde cerramos todos los demás paneles abiertos. Agregamos una declaración condicional if (panels[j] !== this.nextElementSibling)para verificar si el panel actual no es el que se está haciendo clic. Si no lo es, lo cerramos. Si lo es, alternamos su estado como antes.
// Con esta modificación, cuando un usuario haga clic en un acordeón, éste:
// Cierre todos los demás paneles abiertos (como antes)
// Alternar el estado del panel actual (abrir o cerrar)
// De esta manera, el usuario puede cerrar el panel actualmente abierto haciendo clic en él nuevamente.