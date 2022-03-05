/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  const nStr = n.toString();
  let sum = 0;
  const iiMax = nStr.length;
  for (let ii=0; ii<iiMax; ii++) {
    sum += parseInt(nStr[iiMax-1-ii]);
  }
  return sum;
  // using maths instead of conversion to String could be better
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, stepOptional) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let step = 1;
  if (stepOptional != undefined) { step = stepOptional; }
  let arr = [];
  for (let ii=start; ii<=end; ii += step) {
    arr.push(ii);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let usersSelected = [];
  users.forEach(user => {
    if ("username" in user && "screenTime" in user) {
      let SumScreenTime = 0;
      user.screenTime.forEach(entry => {
        if ("date" in entry) {
          if (entry.date === date && "usage" in entry) {
            //console.log("date");
            Object.keys(entry.usage).forEach(key => SumScreenTime += entry.usage[key] );
          }
          //console.log(SumScreenTime);
        }
      });
      if (SumScreenTime > 100) {usersSelected.push(user.username)}
    }
  }); 
  return usersSelected;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length != 7) throw new Error("hexStr is required, starting with #");
  if (hexStr[0] != "#") throw new Error("hexStr is required, starting with #");
  // https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
  const reg=/^#[0-9A-F]{6}$/i;
  if (!reg.test(hexStr)) throw new Error("hexStr is required");
  let rgbStr = "rgb(";
  for (let ii=1; ii<=5; ii+=2){
    const hexVal = hexStr.substr(ii,2);
    const intVal = parseInt(hexVal, 16);
    rgbStr += intVal+",";
  }
  return rgbStr.slice(0,-1) + ")"
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let positions = [[],[]];
  let position = 0;
  board.forEach(line => {
    line.forEach(entry => {
      if (entry === "X") { positions[0].push(position); }
      else if (entry === "0") { positions[1].push(position); }
      position++;
    });
  }); // could also filter by indexOf for each line, and then add 3*number of line
  const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];  // more inteligent: start and step could be given
  let win = [false, false];
  winPositions.forEach(winPosition => {
    for (let player=0; player<=1; player++) {
      // checks that each entry in winPosition is in positions[player], every() is like np.arr.all()
      const found = winPosition.every(r=> positions[player].indexOf(r) >= 0);
      win[player] = win[player] || found;
    } 
  });
  if (win.every(entry => entry)) throw new Error("both players won");
  if (win[0]) return "X";
  if (win[1]) return "0";
  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
