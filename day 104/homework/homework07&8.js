// 8) https://www.codewars.com/kata/6707688c0f597511f6649270/train/javascript

function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  return start < tz_from - tz_to - duration
}

// 9) https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  if(queue[queue.length-1] === "wolf"){
    return "Pls go away and stop eating my sheep"
  }
  else{
    let Nqueue = queue.reverse()
    let wolf = queue.indexOf("wolf");
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
  }
}