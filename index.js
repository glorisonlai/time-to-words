const HOUR_DICT = {
  0: "midnight",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "midday",
}

const MIN_DICT = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half",
};
 

function stringRep(value, time) {
  if (time == "hour") {
    if (value < 0 || value > 12) throw Error("Invalid Hour: " + value)
    return HOUR_DICT[value]
  }
  if (time == "minute") {
    if (value < 0 || value > 30) throw Error("Invalid Minute: " + value)
    return MIN_DICT[value]
  }
  
  throw Error("Unknown time value " + time)
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour_, minute_] = time.split(':'); 
  
  const hour = parseInt(hour_, 10), minute = parseInt(minute_, 10)

  if (minute === 0) {
    if (hour === 0 || hour === 12) {
      return stringRep(hour, "hour")
    }
    return `${stringRep(hour, "hour")} o'clock`
  }
  
  if (minute <= 30) {
    return `${stringRep(minute, "minute")} past ${stringRep(hour, "hour")}`
  }

  return `${stringRep(60 - minute,"minute")} to ${stringRep(hour + 1, "hour")}`
}

module.exports = { convertTimeToWords };