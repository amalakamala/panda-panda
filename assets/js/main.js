
(function borrar(){
	var pandas = Array.from(document.querySelectorAll(".los-pandas span"));
	var div = Array.from(document.querySelectorAll('.fotos div'))


	pandas.forEach(function(e){
		e.addEventListener("click", function(){
			this.parentElement.classList.add("nada");
		});
	});


	var restaurar = document.getElementById("foto");
	restaurar.addEventListener("click", function(){
		pandas.forEach(function(e){
			e.parentElement.classList.remove("nada");
		})		
	})



	var textoUno =document.getElementById("texto-uno");
	var algoUno = document.getElementById("exti");	
	algoUno.addEventListener("click", function(){
		textoUno.remove(algoUno);
	})


	var texto = document.getElementById("texto-dos");
	var algo = document.getElementById("ori");
	algo.addEventListener("click", function(){
		texto.remove(algo);
	})

})()









