//questions 1

const describeValue = (value) => {
  if (value) {
    return `${typeof value} | truthy`;
  } else {
    return `${typeof value} | falsy`;
  }
};

let result = describeValue("nnumber");
let result2 = describeValue(0);
let result3 = describeValue("0");
let result4 = describeValue(null);
let result5 = describeValue(undefined);

console.log(result);
console.log(result2);
console.log(result3);

console.log(result4);
console.log(result5);

//questions 2

const getDayType = (value) => {
  switch (true) {
    case value === "Saturday":
      return " Weekend";
      break;

    case value === "Sunday":
      return "Working Day";
      break;

    case value === "Friday":
      return "Weekend";
      break;

    case value === "Monday":
      return "Working Day";
      break;

    case value === "Tuesday":
      return "Working Day";
      break;

    case value === "Wednesday":
      return "Working Day";
      break;

    case value === "ThursDay":
      return "Working Day";
      break;

    default:
      return "Invalid Day";
      break;
  }
};

let weekendresult = getDayType("Saturday");
let weekendresult2 = getDayType("Sunday");
console.log(weekendresult);
console.log(weekendresult2);

//questions 3
const validateUserName = (value) => {
  let length = value.length;
  let space = value.includes(" ");
  let space2 = value.includes("admin");
  if (length < 4) {
    return "Too Short";
  }
  if (space) {
    return "No Space Allowed";
  }
  if (space2) {
    return "Reserved Word";
  } else {
    return "Available";
  }
};

let gatekeeper = validateUserName("rahim123");
console.log(gatekeeper);
let gatekeeper2 = validateUserName("No space");
console.log(gatekeeper2);
let gatekeeper3 = validateUserName(" ");
console.log(gatekeeper3);
let gatekeeper4 = validateUserName("superadmin");
console.log(gatekeeper4);

//questions 4

const getcngfare = (distance, isNight = false, WaitingMinutes = 0) => {
  if (isNight == false) {
    if (distance <= 2) {
      return 50 + WaitingMinutes * 2;
    } else {
      return 50 + (distance - 2) * 15 + WaitingMinutes * 2;
    }
  } else {
    if (distance <= 2) {
      let tdistance = 50 + WaintingMinutes * 2;
      return tdistance + tdistance * 0.2;
    } else {
      let tdistance = 50 + (distance - 2) * 15 + WaitingMinutes * 2;
      return tdistance + tdistance * 0.2;
    }
  }
};

let getcngfare1 = getcngfare(2);

let getcngfare2 = getcngfare(5, true, 10);

console.log(getcngfare1);
console.log(getcngfare2);

//questions 5

const getChaseVerdict = (target, scored, ballsleft) => {
  let runNeeded = target - scored;
  let requiredRate = (runNeeded / ballsleft) * 6;

  if (runNeeded === 0 && ballsleft >= 1) {
    return "WON";
  } else if (runNeeded >= 0 && ballsleft <= 0) {
    return "Lost";
  } else {
    if (requiredRate <= 6) {
      return `"Need ${runNeeded} in ${ballsleft} |comfortable"`;
    } else if (requiredRate > 6 && requiredRate <= 12) {
      return `"Need ${runNeeded} in ${ballsleft} | Tough "`;
    } else {
      return `"Need ${runNeeded} in ${ballsleft} | Almost Impossible "`;
    }
  }
};

let cricketscore = getChaseVerdict(200, 200, 12);
let cricketscore1 = getChaseVerdict(200, 190, 0);
let cricketscore2 = getChaseVerdict(150, 149, 1);
let cricketscore3 = getChaseVerdict(100, 70, 12);

console.log(cricketscore);
console.log(cricketscore1);
console.log(cricketscore2);
console.log(cricketscore3);
