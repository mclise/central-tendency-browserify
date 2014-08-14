module.exports = function(numbers) {
  numbers.sort(function(a, b){return (a - b)});
  return numbers;
}
