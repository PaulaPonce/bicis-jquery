$(document).ready(function(){
	$("button").on("click", validateForm);

	function validateForm(event){
		event.preventDefault();
		var name = $("#name").val();
			//validación nombre
			if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name)){
				$(".name-container").append("<span>Debe ingresar su nombre (debe comenzar con mayúscula)</span>")
			}
	}
});

