//2 - Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente”. Valores: R$ 1,00 - 30 minutos, R$ 1.75 - 60 minutos e R$3,00 - 120 minutos.

function parquimetro() {

    const vlr = document.getElementById("inValor");
    const trc = document.querySelector("h3");
    const tmp = document.querySelector("h4");

    const valor = Number(vlr.value);  

    if (valor >= 3.00) {
        tmp.innerText = "120 minutos";
        trc.innerText = "Troco = R$" + (valor - 3.00);
    } else if (valor >= 1.75) {
        tmp.innerText = "60 minutos";
        trc.innerText = "Troco = R$" + (valor - 1.75);
    } else if (valor >= 1.00) {
        tmp.innerText = "30 minutos";
        trc.innerText = "Troco = R$" + (valor - 1.00);
    } else {
        trc.innerText = "Valor Insuficiente";
    }
}

var botao = document.getElementById("botao")
botao.addEventListener("click", parquimetro)