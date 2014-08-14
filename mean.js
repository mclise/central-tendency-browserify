module.exports = function(numbers) {
  var mean;
  var total = 0;
  for (i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  mean = total / numbers.length;
  return mean;
}