
const validator = { isValid }

function isValid(creditCardNumber) {
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
}

/*
let newNumCard = creditCardNumber * 2;
let numBol = false;
 
if (newNumCard == 4) {
  numBol = true;
}
else {
  numBol = false;
}
return numBol
*/

/*
function checkLuhn(string purportedCC) {
    int nDigits := length(purportedCC)
    int sum := 0;
    int parity := (nDigits-2)modulus 2 
    for i from 0 to nDigits - 1 {
        int digit := integer(purportedCC[i])
        if i modulus 2 = parity 
            digit := digit × 2 
        if digit > 9 
            digit := digit - 9 
        sum := sum + digit 
    }
    return (sum modulus 10) = 0 
}
*/


export default validator;
