//clock angle
var hours = 0;
var hourHand = 360 / 12; // [30 degrees/ hour]  ie 4:00 === 4 / 12 => .30 * 360 => 120 degrees
var minHand = 360 / 60  //[6 degrees/min]   ie :42 * 6 = 252   or.. 42/60 => .7 * 360 = 252 degrees
var min = 360 / min // 30 deg/hour ÷ 60 => [.5 degrees per min]




/*

function getClockAngle(hours, minutes, isPortionWithTwelve) { // using 12-hour OR 24-hour clock notation
  hours = hours % 12;
  
  var hourMinPart = 0.5 * minutes, // 30 degrees per 60 minutes => 1/2 degree per 1 minute => 0.5 * minute
      hourHourPart = 30 * hours, // 30 degrees per 1 hour => 30 * hour
      minAngle = 6 * minutes, // 360 degrees per 60 minutes => 6 degrees per 1 minute => 6 * minute
      totalAngle = Math.abs(hourMinPart + hourHourPart - minAngle); // absolute difference

  return isPortionWithTwelve ? 360 - totalAngle : totalAngle; // subtract the total angle from 360 to get the portion w/ 12
}

// Examples
console.log("4:42", getClockAngle(4, 42)); // 111 degrees
console.log("4:42", getClockAngle(4, 42, true)); // 249 degrees
console.log("12:01", getClockAngle(12, 01)); // 5.5 degrees
console.log("12:00", getClockAngle(12, 00)); // 0 degrees
console.log("00:01", getClockAngle(00, 01)); // 5.5 degrees
console.log("24:01", getClockAngle(24, 01)); // 5.5 degrees
console.log("16:42", getClockAngle(16, 42)); // 111 degrees
console.log("11:01", getClockAngle(11, 01)); // 324.5 degrees



*/