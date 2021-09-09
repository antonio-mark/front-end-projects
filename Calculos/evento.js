function evento(){
	var valor=parseInt(document.getElementById("valor").value);
    var idade=parseInt(document.getElementById("idade").value);
    var resultado;
    if(valor >= 1000 && idade >= 18){
        resultado = "Pode Participar!";
    } else {
        resultado = "Não Pode Participar!";
    }

	document.getElementById("resultado").innerHTML="<h2>Resultado</h2>" + "<h2>" + resultado + "</h2>"
}
