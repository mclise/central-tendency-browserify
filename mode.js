var mode; 
var count = 1;
var tempCount = 1;

var findMode = function(numbers) {
  for (i = 0; i < numbers.length - 1; i++){
    
    if (numbers[i] === numbers[i + 1]){
      tempCount++;
      if (tempCount > count){
        mode = numbers[i];
        count = tempCount;
      }
    } else {
      tempCount = 1;
    }
  }
  if(!mode){
    return ("There is no mode");
  } else {
  return mode;
  }
};

module.exports = findMode;