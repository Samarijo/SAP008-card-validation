const validator = {
isValid: 
function (creditCardNumber) {
  const transfCard = creditCardNumber.split("").reverse();

  let retCard = 0;

  for (let i = 0; i < transfCard.length; i++) {
    let numCard = parseInt(transfCard[i])

    if (i % 2 !== 0 && numCard >= 5) {
      retCard = retCard + (numCard * 2) - 9;
      console.log("1")
    }
    else if (i % 2 !== 0 && numCard <= 5) {
      retCard = retCard + (numCard * 2);
      console.log("2")
    }
    else {
      retCard = retCard + numCard;
      console.log("3")
    }
  }

  if (retCard % 10 === 0) {
    return true
  }
  else {
    return false
  }
},
maskify:
function (mascararNum) {
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
