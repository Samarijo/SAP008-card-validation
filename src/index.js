import validator from './validator.js';
function validadorCard (){
    let cardNumb = document.getElementById("numDigitado").value
    let resultFinal = validator.isValid(cardNumb)
    console.log(resultFinal)
    let mascarar = validator.maskify(cardNumb)
    let resultmask = document.getElementById("numMask")
    
    if (cardNumb === ""){
        return resultmask.textContent = " ENTER A NUMBER"
    }
    if (resultFinal) {
        resultmask.textContent = mascarar + " VALID CARD" 
    }
    else {
        resultmask.textContent = mascarar + " INVALID CARD"
    }
    document.getElementById("numDigitado").value = ""

}
let runBotao = document.getElementById("botao")
runBotao.addEventListener("click", validadorCard)
