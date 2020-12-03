const alpha = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

const criptoWord = 'Hello World';

let arrAlpha = alpha.split(' ');
let arrCriptoWord = criptoWord.toLowerCase().split('');


function criptoMessage(data, num) {
 let result = [];
 for (let i = 0; i < data.length; i++) {
  if (data[i] === ' ') {
   result.push(' ');
  }
  for (let j = 0; j < arrAlpha.length; j++) {
   if (data[i] === arrAlpha[j]) {
    let index = j + num;
    if (index >= 0 && index <= 25) {
     result.push(arrAlpha[index]);
    } else if (index > 25) {
     index = (index % 25) - 1;
     result.push(arrAlpha[index]);
    } else if (index < 0) {
     index = 25 + index;
     result.push(arrAlpha[index]);
    }
   }
  }
 }
 return result.join('');
}

console.log(criptoMessage(arrCriptoWord, 5));

