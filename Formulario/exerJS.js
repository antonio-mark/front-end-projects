alert('Seja bem-vindo!');

function enviar(){
	var nome=document.getElementById('id_nome').value;
    var idade=document.getElementById('id_idade').value;
    var cidade=document.getElementById('id_cidade').value;
	var date=document.getElementById('id_date').value;
    var email=document.getElementById('id_email').value;
    var senha=document.getElementById('id_senha').value;

	var tabela="<table align=center border=2>";
		tabela+="<tr><th>Nome</th><th>Idade</th><th>Cidade</th><th>Data Nasc</th><th>E-mail</th><th>Senha</th></tr>";
		tabela+="<tr><td>"+nome+"</td><td>"+idade+"</td><td>"+cidade+"</td><td>"+date+"</td><td>"+email+"</td><td>"+senha+"</td></tr>";
		tabela+="</table>";
		document.getElementById("exibir").innerHTML=tabela;
}
