function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Check that the key is available
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Check that the key is available
  return (person.city.toLowerCase() == "manchester");
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let numberOfSheep = 0;
  for (let entry of arr) {
    if (entry.toLowerCase() == "sheep") {
      numberOfSheep ++;
    }
  }
  return numberOfSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Check that the key is available
  return (person.address.city.toLowerCase() == "manchester") && (person.address.postCode.slice(0, 1).toLowerCase() == "m");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
