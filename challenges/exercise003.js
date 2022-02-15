function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squares = [];
  for (let num of nums){
    squares.push(Math.pow(num,2));
  }
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length == 0) {
    return "";
  }
  let camelWord = words[0];
  for (let ii=1; ii<words.length; ii++ ) {
    camelWord += capitalize(words[ii]);
  }
  return camelWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Missing: Check that things exist
  let totalSubjects = 0;
  people.forEach(person => {
    totalSubjects += person.subjects.length
  });
  // Both ways work
  //for (let person of people) {
  //  totalSubjects += person.subjects.length;
  //}
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let isInMenu = false;
  menu.forEach(meal => {
    for (let entry of meal.ingredients) {
      if (entry == ingredient) {
        isInMenu = true;
        break;
      }
    }
    //if (isInMenu) { break; }      // not allowed in forEach
  });
  return isInMenu
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let uniqueArr1 = [...new Set(arr1)] ;
  // a one-liner, but harder to read, arr2 doesn't need to be unique
  let dublicateArr2 = uniqueArr1.filter((val) => arr2.indexOf(val) >= 0);
  return dublicateArr2.sort();
}
function duplicateNumbers_v1(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let uniqueArr1 = [...new Set(arr1)] ;
  let dublicateArr = [];
  // mixture of both, not tested, arr2 doesn't need to be unique
  uniqueArr1.forEach(entry1 => {
    if (arr2.indexOf(entry1) >= 0) {
      dublicateArr.push(entry1);
    }
  });
  return dublicateArr.sort();
}

function duplicateNumbers_v2(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let uniqueArr1 = [...new Set(arr1)] ;
  let uniqueArr2 = [...new Set(arr2)] ;
  // easy to read, but much more text
  let dublicateArr = [];
  uniqueArr1.forEach(entry1 => {
    uniqueArr2.forEach(entry2 => {
      if (entry1 == entry2) {
        dublicateArr.push(entry1);
      }
    });
  });
  return dublicateArr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers, duplicateNumbers_v1, duplicateNumbers_v2
};
