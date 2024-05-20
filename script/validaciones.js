/*El evento oninvalid hereda un objeto event, el cual contiene unas propiedades, 
      incluyendo la propiedad target (el elemento invalido) y el validationMessage que 
      contiene un mensaje de texto de error. En el ejemplo de arriba, hemos neutralizado 
      el mensaje de texto usando el método setCustomValidity()*/
      var input = document.getElementById("nombre");
      input.oninvalid = function(event) {
        event.target.setCustomValidity("El nombre no puede estar vacío y sólo puede contener letras");
      }
      
      var inputApellido = document.getElementById("apellido");

//  mensaje  de error de validación
inputApellido.oninvalid = function(event) {
  event.target.setCustomValidity("El apellido no puede estar vacío y solo puede contener letras");
};

// Restablecer la validación cada vez que el usuario escribe algo
inputApellido.oninput = function(event) {
  event.target.setCustomValidity('');  // Restablece el mensaje 
  if (!event.target.validity.valid) {
    event.target.setCustomValidity("El apellido no puede estar vacío y solo puede contener letras");
  }
};
      
      const email = document.getElementById("email"); 
      email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
          email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
        } else {
          email.setCustomValidity("");
        }
      });