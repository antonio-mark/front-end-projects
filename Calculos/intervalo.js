function intervalo(){
	var v1=parseInt(document.getElementById("v1").value);
	var v2=parseInt(document.getElementById("v2").value);
    var soma = 0;
    var multiplicacao = 0;
	
	if(v1 < v2) {
		for(i = v1; i <= v2; i++){
			soma = soma + i;
		}
	} else {
		for(i = v2; i <= v1; i++){
			  soma = soma + i;
		}
	}

    for (i = 0; i < v1; i++) {
        multiplicacao += v2;
    }


 	document.getElementById("resultado").innerHTML="<h2>Resultado da Soma</h2>" + "<h2>" + soma + "</h2>" 
	+ "<h2>Resultado da Multiplicação</h2>" + "<h2>" + multiplicacao + "</h2>"
}
