var campoTemperatura = document.querySelector("#temp");
const calculaC = document.getElementById('b2');
const calculaF = document.getElementById('b3');

function CalculaCelsius(evento) {

    var result1 = (((campoTemperatura.value)*(9/5))+32);
    var result = result1.toFixed(1);

    const exibirResultado = document.getElementById('resultado');

    exibirResultado.innerHTML = result + "°C";

    document.getElementById('temp').value ='';

}

function CalculaFahrenheit(evento) {

    var result1 = (((campoTemperatura.value)-32)*(5/9));

    var result = result1.toFixed(1);

    const exibirResultado = document.getElementById('resultado');
    exibirResultado.innerHTML = result + "°F";
    document.getElementById('temp').value ='';

}

calculaC.addEventListener('click', CalculaCelsius);
calculaF.addEventListener('click', CalculaFahrenheit);

