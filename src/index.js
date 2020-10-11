module.exports = function toReadable (number) {
  let arrNumbers = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let arrToHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
  if (number < 10) {
      return arrNumbers[number];
  } else if (number < 20) {
      return secondTens[number-10];
  } else if (number < 100) {
      if (number % 10 === 0) {
          return arrToHundred[parseInt(number/10) -2 ];
      } else {
          return arrToHundred[parseInt((number/10 -2))] +" "+arrNumbers[number%10];
      }
  } else {
      if (number % 100 === 0){
          return arrNumbers[number/100]+" hundred";
      }  else if (number % 100 < 10) {
        return arrNumbers[parseInt(number/100)]+" hundred " + arrNumbers[number % 100];
      } else if  (number % 100 < 20) {
        return arrNumbers[parseInt(number/100)]+" hundred " + secondTens[number % 100 -10];
      } else if  (number % 10 === 0) {
        return arrNumbers[parseInt(number/100)]+" hundred " + arrToHundred[parseInt((number%100)/10) -2 ];       
      } else {
        return arrNumbers[parseInt(number/100)]+" hundred " + arrToHundred[parseInt((number%100)/10) -2 ] +" "+
        arrNumbers[parseInt(number%10)];
      }
  }
}
