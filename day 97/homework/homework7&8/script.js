// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b){
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) {
    return -1;
  }
  else if(a.toUpperCase() === a && b.toUpperCase() === b || 
  a.toLowerCase() === a && b.toLowerCase() === b){
    return 1
  } else{
    return 0
  }
}

// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  let low = array[0];
  let high = array[0];
  for(let i = 0; i<array.length; i++){
    if(array[i] > high){
      high = array[i]
    } else if(array[i] < low){
      low = array[i]
    }
  }
  let final = array.reduce((acc, curr) => acc + curr, 0)
  return final - high - low
}