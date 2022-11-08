function ocultar(val) {
  if (val.value == "raiz") {
    document.getElementById("label").style.display = "none";
    document.getElementById("v2").style.display = "none";
  } else {
    document.getElementById("label").style.display = "inline";
    document.getElementById("v2").style.display = "inline";
  }
}

function operacoes() {
  let v1 = parseInt(document.getElementById("v1").value);
  let v2 = parseInt(document.getElementById("v2").value);
  let option = document.getElementById("options").value;
  let resultado;

  if (option == "adicao") {
    resultado = v1 + v2;
  }
  if (option == "subtracao") {
    resultado = v1 - v2;
  }
  if (option == "multiplicacao") {
    resultado = v1 * v2;
  }
  if (option == "divisao") {
    resultado = v1 / v2;
  }
  if (option == "resto") {
    resultado = v1 % v2;
  }
  if (option == "potencia") {
    resultado = Math.pow(v1, v2);
  }
  if (option == "raiz") {
    resultado = Math.sqrt(v1);
  }
  document.getElementById("resultado").innerHTML = "<h2>Resultado</h2>" + "<h2>" + resultado + "</h2>";
}
