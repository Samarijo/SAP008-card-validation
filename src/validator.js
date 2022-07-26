const validator = {
  isValid:
  function (logicaString){
    let cardNumb = logicaString.split("").reverse()
    let sumFinal = 0;

    for (let i=0; i < cardNumb.length;i++) { 
      let num = parseInt(cardNumb[i])
      if ((i % 2 !== 0) && (num>=5)){
        sumFinal = sumFinal + ((num*2)-9);
      }
      else if ((i % 2 !== 0) && (num<=5)) {
        sumFinal = sumFinal + (num *2);
      }
      else {
        sumFinal = sumFinal + (num);
      }
    }
    if (sumFinal % 10  === 0){
      return true
    }
    else {
      return false
    }

  },
  maskify: function (mascararNum) {
    const ultimosQuatroNum = 4
    let mascarar = ""
    for (let i = 0; i < mascararNum.length; i++) {
      if (i >= ((mascararNum.length) - ultimosQuatroNum)) {
        mascarar = mascarar + mascararNum.charAt(i)
      }
      else {
        mascarar = mascarar + "#"
      }
    }
    return mascarar
  }
}
export default validator;
