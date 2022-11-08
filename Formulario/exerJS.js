alert("Seja bem-vindo!");

function enviar() {
  let nome = document.getElementById("id_nome").value;
  let idade = document.getElementById("id_idade").value;
  let cidade = document.getElementById("id_cidade").value;
  let date = document.getElementById("id_date").value;
  let email = document.getElementById("id_email").value;
  let senha = document.getElementById("id_senha").value;

  let tabela = "<table align=center border=2>";
  tabela += "<tr><th>Nome</th><th>Idade</th><th>Cidade</th><th>Data Nasc</th><th>E-mail</th><th>Senha</th></tr>";
  tabela +=
    "<tr><td>" + nome + "</td><td>" + idade + "</td><td>" + cidade + "</td><td>" + date + "</td><td>" + email + "</td><td>" + senha + "</td></tr>";
  tabela += "</table>";
  document.getElementById("exibir").innerHTML = tabela;
}
