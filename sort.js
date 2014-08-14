var sort = function(numbers) {
  var compare = function(a, b){
    return (a - b)
  }
  numbers.sort(compare);
  return numbers;
}

module.exports = sort;