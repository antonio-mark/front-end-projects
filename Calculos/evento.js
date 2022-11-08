function evento() {
  let valor = parseInt(document.getElementById("valor").value);
  let idade = parseInt(document.getElementById("idade").value);
  let resultado;
  if (valor >= 1000 && idade >= 18) {
    resultado = "Pode Participar!";
  } else {
    resultado = "Não Pode Participar!";
  }

  document.getElementById("resultado").innerHTML = "<h2>Resultado</h2>" + "<h2>" + resultado + "</h2>";
}
