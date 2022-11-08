function classificar() {
  let idade = parseInt(document.getElementById("idade").value);
  let resultado;
  if (idade < 0 || idade > 100) {
    resultado = "Não aceitável!";
  } else if (idade >= 0 && idade <= 14) {
    resultado = "Infantil";
  } else if (idade >= 15 && idade <= 21) {
    resultado = "Juvenil";
  } else if (idade >= 22 && idade <= 60) {
    resultado = "Adulto";
  } else {
    resultado = "Idoso";
  }

  document.getElementById("resultado").innerHTML = "<h2>" + resultado + "</h2>";
}
