function waveHello() {
    return "👋 Hello!";
  }
  
let nums = [4, 3, 6, 1, 54, 6];

function getEvenNums(numsArr){
    let evenNums = [];
    for (num of numsArr)
    if (num % 2 == 0)
        evenNums.push(num);
    return evenNums;
}

console.log(getEvenNums(nums));
console.log(nums);