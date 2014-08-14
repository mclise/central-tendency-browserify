var findMean = require('./mean');
var findMedian = require('./median');
var findMode = require('./mode');
var sorter = require('./sort');

var numbers = [];
var userInput = prompt("Enter a list of numbers separated by a single space to find mean/med/mode.");

console.log(userInput);

numberStrings = userInput.split(" ");

console.log(numberStrings);

for(j = 0; j < numberStrings.length; j++){
  numbers.push(parseInt(numberStrings[j]));
}

console.log(numbers);

sorter(numbers);

console.log(numbers);

var curMean = findMean(numbers);
var curMed = findMedian(numbers);
var curMode = findMode(numbers);

alert("Mean: " + curMean + "\n" +
      "Median: " + curMed + "\n" +
      "Mode: " + curMode)

