// 6)https://www.codewars.com/kata/68851563123e161332d2a84b/train/javascript

function hasLoop(indices) {
  let visitedIndices = new Set();
  let currentIndex = 0;

  while (currentIndex >= 0 && currentIndex < indices.length) {
    if (visitedIndices.has(currentIndex)) {
      return true;
    }

    visitedIndices.add(currentIndex);

    currentIndex = indices[currentIndex];
  }

  return false;
}

// 7) https://www.codewars.com/kata/68332539defbf760434582d1/train/javascript

function circleMender(content) {
  return content.replace(/\#.+\#/g, s => "#".repeat(s.length))
} 

// or

function fill(line) {
  if (/#/.test(line)){
    line = line.replace(/(?<=#) +(?=#)/g, '')
    while (line.length < 40) {
      let i = line.indexOf('#')
      line = line.substring(0,i) + '#' + line.substring(i)
    }
    return line
  }
    return line
}
function circleMender(content) {
    return content.split("\n").map(x => fill(x)).join('\n')
}