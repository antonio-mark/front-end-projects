function calcular() {
    var quantidade = document.getElementById("quantidade").value;
    var resultado;

    switch(document.getElementById("opcoes").selectedIndex) {
        case 0:
            resultado = quantidade * 2;
            break;
        case 1:
            resultado = quantidade * 4;
            break;
        case 2:
            resultado = quantidade * 6;
            break;
        case 3:
            resultado = quantidade * 8;
            break;
        case 4:
            resultado = quantidade * 3;
            break;
        case 5:
            resultado = quantidade * 5;
            break;
        case 6:
            resultado = quantidade * 10;
            break;
        case 7:
            resultado = quantidade * 11;
            break;
    }

    document.getElementById("resultado").innerHTML = "<h2>Valor a ser pago: R$ " + resultado + "</h2>"
}
