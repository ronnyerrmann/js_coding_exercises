const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let ii=0; ii<nums.length-1; ii++) {
    if (nums[ii] === n) {
      return nums[ii+1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const strArr = str.split('');
  const results = {0: strArr.filter(letter => (letter==='0')).length ,
                   1: strArr.filter(letter => (letter==='1')).length} ;
  // 1: could be also str.length-restuls.0
  return results;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const nStr = n.toString();
  let invStr = '';
  const iiMax = nStr.length;
  for (let ii=0; ii<iiMax; ii++) {
    invStr += nStr[iiMax-1-ii];
  }
  return parseInt(invStr);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let result = 0;
  arrs.forEach(subarr => {
    subarr.forEach(entry => result += entry);
  });
  return result;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) { return arr; }
  // not sure that this is nicer
  const lastPos = arr.length-1;
  return arr.map(function(val, index, sameArr) {
    if (index===0) { return sameArr[lastPos]; }
    else if (index===lastPos) { return sameArr[0]; }
    else { return val; }
  });
};

const arrShift1 = arr => {
  // very long
  const lastPos = arr.length-1;
  const temp = arr[lastPos];
  arr[lastPos] = arr[0];
  arr[0] = temp;
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  searchTerm = searchTerm.toLowerCase();
  let found = false;
  Object.keys(haystack).forEach(key => found = ((haystack[key].toString().toLowerCase().search(searchTerm) >= 0)  || found));
  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const strArr = str.split(' ');
  const results = {};
  strArr.forEach(word => {
    const wordL = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let found = false;
    Object.keys(results).forEach(key => found = (key===wordL || found));
    if (found) { results[wordL] += 1; }
    else { results[wordL] = 1; }
  });
  return results;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift, arrShift1,
  findNeedle,
  getWordFrequencies
};
