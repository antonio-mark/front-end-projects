function pitagoras(){
	var v1=parseInt(document.getElementById("v1").value);
	var v2=parseInt(document.getElementById("v2").value);
	var resultado=Math.sqrt(Math.pow(v1, 2) + Math.pow(v2, 2)) ;
	document.getElementById("resultado").innerHTML="<h2>Resultado</h2>" + "<h2>" + resultado + "</h2>"
}
