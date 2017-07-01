$(document).ready(function(){
	$("button").on("click", validateForm);

	function validateForm(event){
		event.preventDefault();
		var name = $("#name").val();
		var lastName = $("#lastname").val();
		var email = $("#input-email").val();
		var pass = $("#input-password").val();
		var bike = $("select");

		//validación nombre
		if(!/^([a-zñáéíóú]{1,11})+$/.test(name)){
			$(".name-container").append("<span>Debe ingresar su nombre (solo caracteres de la A a la Z)</span>");
		}
		//validación apellido
		if(!/^([a-zñáéíóú]{1,11})+$/.test(lastName)){
			$(".lastname-container").append("<span>Debe ingresar su apellido (solo caracteres de la A a la Z)</span>");
		}
		//validación correo
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			$(".email-container").append("<span>Verifique su email</span>");
		}
		//validación contraseña
		if(pass.length <= 6 || pass === "123456" || pass === "098765" || pass === "password"){
			$(".password-container").append("<span>La contraseña debe tener al menos 6 caracteres</span>");
		}
		//validación tipo de bici
		if(bike[0].selectedIndex == 0){
		$(".bike-container").append("<span>Debes seleccionar al menos un tipo de bici</span>");
		}
	}
});

