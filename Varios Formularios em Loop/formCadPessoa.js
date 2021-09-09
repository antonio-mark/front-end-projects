function enviar(){
    var resultado = [];
    var nome=document.getElementById('id_nome').value;
    var idade=document.getElementById('id_idade').value;
    var cidade=document.getElementById('id_cidade').value;
    var email=document.getElementById('id_email').value;
    var senha=document.getElementById('id_senha').value;

    resultado.push({
        nome,
        idade,
        cidade,
        email,
        senha
    });

	var tabela ="<table align=center border=2>";
    tabela+="<tr><th>Nome</th><th>Idade</th><th>Cidade</th><th>E-mail</th><th>Senha</th></tr>";
    for (let i = 0; i < resultado.length; i++) {
        tabela+="<tr><td>" + resultado[i].nome + "</td><td>" + resultado[i].idade +
         "</td><td>" + resultado[i].cidade + "</td><td>"
        + resultado[i].email + "</td><td>" + resultado[i].senha + "</td></tr>";
        alert("Usuário cadastrado!")
    }
    tabela+="</table>";
 	document.getElementById("exibir").innerHTML+="<h2>" + tabela + "</h2>"
}
