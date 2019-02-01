
function anadir_alimento(){   
   
    var alimento = document.getElementById("producto").value;   
    var alimentos = producto.options[alimento-1].text;
                         
    var parrafo = document.createElement("p");

    parrafo.innerHTML= alimentos;
	 
    document.getElementsByTagName("p")[0].appendChild(parrafo); 
}

function comprar(){
    alert("Has realizado la compra con éxito");
  }
