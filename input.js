var findMean = require('./mean.js');
var findMedian = require('./median.js');
var findMode = require('./mode.js');
var sort = require('./sort.js');

var numbers = prompt("Enter a list of numbers separated by a single space to find mean/med/mode.");

numbers.split(" ");

for(j = 0; j > numbers.length; j++){
  parseInt(numbers[j]);
}

var sortedNum = sort(numbers);
var curMean = findMean(sortedNum);
var curMed = findMedian(sortedNum);
var curMode = findMode(sortedNum);

alert("Mean: " + curMean + "/n" +
      "Median: " + curMed + "/n" +
      "Mode: " + curMode)

