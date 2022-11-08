function primo() {
  let v1 = parseInt(document.getElementById("v1").value);
  let v2 = parseInt(document.getElementById("v2").value);
  const result = document.getElementById("resultado");

  let isEven = (number) => (number % 2 === 0 ? "Par" : "Ímpar");
  let isPositive = (number) => (number === 0 ? "Nulo" : number >= 0 ? "Positivo" : "Negativo");
  let isHigh = (number1, number2) => (number1 > number2 ? "Maior" : "Menor");
  let isPrime = (number) => {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return "não é Primo";
    return number > 1 ? "é Primo" : "não é Primo";
  };

  if (v1 === v2) {
    result.innerHTML =
      "<h2>Resultado</h2>" +
      "<h2>" +
      `${v1} é ${isEven(v1)} e ${isPositive(v1)}` +
      "</h2>" +
      "<h2>" +
      `${v1} ${isPrime(v1)}` +
      "</h2>" +
      "<h2>" +
      `Os números são Iguais` +
      "</h2>";
  } else {
    result.innerHTML =
      "<h2>Resultado</h2>" +
      "<h2>" +
      `${v1} é ${isEven(v1)} e ${isPositive(v1)}` +
      "</h2>" +
      "<h2>" +
      `${v2} é ${isEven(v2)} e ${isPositive(v2)}` +
      "</h2>" +
      "<h2>" +
      `${v1} é ${isHigh(v1, v2)} que ${v2}` +
      "</h2>" +
      "<h2>" +
      `${v1} ${isPrime(v1)}` +
      "</h2>" +
      "<h2>" +
      `${v2} ${isPrime(v2)}` +
      "</h2>";
  }
}
