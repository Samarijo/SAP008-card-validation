import validator from './validator.js';
function validadorCard (){
    let cardNumb = document.getElementById("numDigitado").value
    let resultFinal = validator.isValid(cardNumb)
    
    let mascarar = validator.maskify(cardNumb)
    let resultmask = document.getElementById("numMask")
    
    if (cardNumb === ""){
        return resultmask.textContent = " INSIRA O NUMERO DO CARTÃO"
    }
    if (resultFinal) {
        resultmask.textContent = mascarar + " CARTÃO VALIDADO" 
    }
    else {
        resultmask.textContent = mascarar + " CARTÃO INVÁLIDO"
    }
    document.getElementById("numDigitado").value = ""

}
let runBotao = document.getElementById("buttonValidator")
runBotao.addEventListener("click", validadorCard)
