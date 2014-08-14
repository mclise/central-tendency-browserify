var median;

var findMedian = function(numbers) {
  var mid = numbers.length / 2;
  if (mid % 1 !== 0){
    median = numbers[Math.floor(mid)]
  } else {
    median = (numbers[Math.floor(mid)] + numbers[Math.floor(mid) - 1]) / 2
  }
  return median;
}

module.exports = findMedian;