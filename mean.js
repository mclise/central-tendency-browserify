var mean;
var total = 0;

var findMean = function(numbers) {
  for (i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  mean = total / numbers.length;
  return mean;
}

module.exports = findMean;