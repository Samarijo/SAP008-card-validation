import validator from './validator.js';

let btnCard = document.querySelector("#buttonValidator");
let respCard = document.querySelector("#numMask");

btnCard.addEventListener('click', validadorCard);

function validadorCard() {
    let numCard = document.querySelector("#numDigitado").value;
    let resultadoFinal = validator.isValid(numCard);

    if (numCard === "") {
        return respCard.innerText = " INSIRA UM NÚMERO";
    }
    else if (resultadoFinal == true) {
        respCard.innerText = numCard + " CARTÃO VÁLIDO";
        console.log(resultadoFinal)
    }
    else {
        respCard.innerText = numCard + " CARTÃO INVÁLIDO";
        console.log(resultadoFinal)
    }
}
