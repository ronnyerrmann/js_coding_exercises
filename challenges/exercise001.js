function roundTo(number, digits) {
    const multiplicator = Math.pow(10, digits);
    number = parseFloat((number * multiplicator).toFixed(11));
    return Math.round(number) / multiplicator;
}

function sumOfArray(numbers) {
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += parseFloat(number);
  }
  return totalSum;
}

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName[0] + '.' + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add a check that it's a number
  return Math.round(originalPrice*(100+vatRate))/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add a check that it's a number
  return Math.round(originalPrice*(100-reduction))/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const strLength = str.length;
  if (strLength === 0 ) {
    return strLength;
  } else if (strLength % 2 === 0) {
    return str.substr(strLength/2-1,2);
  } else {
    return str.substr((strLength-1)/2,1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reverseWord = "";
  for (let ii = word.length-1; ii >= 0; ii--) {
    reverseWord += word.substr(ii,1)
  }
  return reverseWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (typeof words === 'string' || words instanceof String) {
    words = [words];
  }
  let reverseWords = [];
  for (let word of words){
    reverseWords.push(reverseWord(word));
  }
  return reverseWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let counter = 0;
  for (let user of users) {
     if (user.type == "Linux") {
       counter ++;
     }
  }
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let average = sumOfArray(scores)/scores.length;
  return roundTo(average, 2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let divBy3 = (n % 3 == 0);
  let divBy5 = (n % 5 == 0);
  if (divBy3 && divBy5) { return "fizzbuzz"; }
  else if (divBy3) { return "fizz"; }
  else if (divBy5) { return "buzz"; }
  else { return n; }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
