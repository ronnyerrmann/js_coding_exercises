function roundTo(number, digits) {
    const multiplicator = Math.pow(10, digits);
    number = parseFloat((number * multiplicator).toFixed(11));
    return Math.round(number) / multiplicator;
}

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  nums.forEach(function(num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let resultNames = [];
  names.forEach(function(name) {
    if (name.slice(0,1) == char) {
      resultNames.push(name);
    }
  });
  return resultNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach(function(word) {
    if (word.slice(0,3) == "to ") {
      verbs.push(word);
    }
  });
  return verbs;
}

function getIntegers(nums) { // https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript#14794066
  if (!nums) throw new Error("nums is required");
  let integers = [];
  nums.forEach(function(num) {
    if (!isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num, 10))) {
      integers.push(num);
    }
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  users.forEach(function(user) {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrts = [];
  nums.forEach(function(num) {
    sqrts.push(roundTo(Math.sqrt(num), 2));
  });
  return sqrts;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let resultSentence = [];
  sentences.forEach(function(sentence) {
    if (sentence.toLowerCase().search(str) >= 0) {
      resultSentence.push(sentence);
    }
  });
  return resultSentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(function(triangle) {
    longestSides.push(Math.max.apply(Math, triangle));
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
