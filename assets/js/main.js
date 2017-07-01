$(document).ready(function(){
	$("button").on("click", validateForm);

	function validateForm(event){
		event.preventDefault();
		var name = $("#name").val();
		var lastName = $("#lastname").val();

			//validación nombre
			if(!/^([a-zñáéíóú]{1,11})+$/.test(name)){
				$(".name-container").append("<span>Debe ingresar su nombre (solo caracteres de la A a la Z)</span>");
			}
			//validación apellido
			if(!/^([a-zñáéíóú]{1,11})+$/.test(lastName)){
				$(".lastname-container").append("<span>Debe ingresar su apellido (solo caracteres de la A a la Z)</span>");
			}
	}
});

