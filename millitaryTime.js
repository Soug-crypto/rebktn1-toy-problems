
/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).
Examples:
toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  var arr = time.split(":")
  if (arr[1][arr[1].length-2] === 'p') {
    return Number(arr[0]) + 12 + ":"+ arr[1].split('p')[0]
  } else if (arr[1][arr[1].length-2] === 'a') {
    if (time === "12:00am" ) {
      return "00:00"
    } else {
      return Number(arr[0]) + ":"+ arr[1].split('a')[0]
    }
  }
  else {
    return time
  }
}
