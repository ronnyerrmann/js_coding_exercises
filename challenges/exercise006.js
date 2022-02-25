/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let num = 0;
  arr.forEach(entry => {
    if (entry%3===0 || entry%5===0) { num += entry; }
  });
  return num;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let valid = true;
  str.split('').forEach(entry => {
    if (entry != "C" && entry != "G" && entry != "T" && entry != "A") { valid = false; }
  });
  return valid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) throw new Error("valid DNA is required");
  const getComplementaryDNAArr = str.split('').map(val => {
    switch (val) {
      case "C": return "G";
      case "G": return "C";
      case "A": return "T";
      case "T": return "A";
      default: throw new Error("valid DNA is required");    // caught alreayd above
    }
  });
  return getComplementaryDNAArr.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 1) throw new Error("a positive integer is expected");
  if (n === 1) { return false;}
  if (n === 2) { return true;}
  if (n%2 === 0) { return false;}
  let isPrime = true;
  for (let testNumber=3; testNumber <= Math.sqrt(n); testNumber += 2){  // still checks for multiple of 5, which could be just caught once
    if (n%testNumber === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const array = Array(n).fill(fill);
  const matrix = Array(n).fill(array);
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let numberStaff = 0;
  staff.forEach(entry => {
    entry.rota.forEach(rotaDay => {
      if (rotaDay === day) { numberStaff ++; }
    });
  });
  return (numberStaff >= 3);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
