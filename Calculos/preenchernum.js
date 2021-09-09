function preencher(){
	var v1=parseInt(document.getElementById("v1").value);
	var v2=parseInt(document.getElementById("v2").value);
	var resultado = [];
	if (v1 < v2){
    	for(i=v1; i<v2 + 1; i++){
	    	resultado += "<th>"+ [i] +"</th>";
	    }
	} else {
		for(i=v2; i<v1 + 1; i++){
	        resultado = i + resultado;
			resultado = "<th>" + resultado + "</th>"
	    }
	  }
		var tabela="<table align=center border=2>";
			tabela+= resultado;
			tabela+="</table>";

 	document.getElementById("resultado").innerHTML="<h2>Tabela</h2>" + "<h2>" + tabela + "</h2>"
}
