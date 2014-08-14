(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./mean":2,"./median":3,"./mode":4,"./sort":5}],2:[function(require,module,exports){
module.exports = function(numbers) {
  var mean;
  var total = 0;
  for (i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  mean = total / numbers.length;
  return mean;
}
},{}],3:[function(require,module,exports){
module.exports = function(numbers) {
  var median;
  var mid = numbers.length / 2;
  if (mid % 1 !== 0){
    median = numbers[Math.floor(mid)]
  } else {
    median = (numbers[Math.floor(mid)] + numbers[Math.floor(mid) - 1]) / 2
  }
  return median;
}
},{}],4:[function(require,module,exports){
module.exports = function(numbers) {
  var mode; 
  var count = 1;
  var tempCount = 1;
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
},{}],5:[function(require,module,exports){
module.exports = function(numbers) {
  numbers.sort(function(a, b){return (a - b)});
  return numbers;
}

},{}]},{},[1]);
