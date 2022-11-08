function enviar() {
  let resultado = [];
  let nome = document.getElementById("id_nome").value;
  let idade = document.getElementById("id_idade").value;
  let cidade = document.getElementById("id_cidade").value;
  let email = document.getElementById("id_email").value;
  let senha = document.getElementById("id_senha").value;

  resultado.push({
    nome,
    idade,
    cidade,
    email,
    senha,
  });

  let tabela = "<table align=center border=2>";
  tabela += "<tr><th>Nome</th><th>Idade</th><th>Cidade</th><th>E-mail</th><th>Senha</th></tr>";
  for (const element of resultado) {
    tabela +=
      "<tr><td>" +
      element.nome +
      "</td><td>" +
      element.idade +
      "</td><td>" +
      element.cidade +
      "</td><td>" +
      element.email +
      "</td><td>" +
      element.senha +
      "</td></tr>";
    alert("Usuário cadastrado!");
  }
  tabela += "</table>";
  document.getElementById("exibir").innerHTML += "<h2>" + tabela + "</h2>";
}
