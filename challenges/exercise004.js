function roundTo(number, digits) {
    const multiplicator = Math.pow(10, digits);
    number = parseFloat((number * multiplicator).toFixed(11));
    return Math.round(number) / multiplicator;
}

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function(num) {
    return (num < 1);
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const resultNames = names.filter(function(name) {
    return (name.slice(0,1) === char);
  });
  return resultNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter(function(word) {
    return (word.slice(0,3) === "to ");
  });
  return verbs;
}

function getIntegers(nums) { // https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript#14794066
  if (!nums) throw new Error("nums is required");
  const integers = nums.filter(function(num) {
    return (!isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num, 10)));
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = users.map(function(user) {
    return user.data.city.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrts = nums.map(function(num) {
    return roundTo(Math.sqrt(num), 2);
  });
  return sqrts;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const resultSentence = sentences.filter(function(sentence) {
    return (sentence.toLowerCase().search(str) >= 0);
  });
  return resultSentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = triangles.map(function(triangle) {
    return Math.max.apply(Math, triangle);
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
