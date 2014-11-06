function squareArray(array){
  return _.map(array, function(item){
    return item * item;
  });
}

function onlySixes(array) {
 return _.filter(array, function(item) {
 return item.toString().indexOf('6') !== -1 ||
        item.toString().indexOf('six') !== -1;
 });
}

function productArray(array) {
  return _.reduce(array, function(prev,next) {
  return prev * next;
  });
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function reverseCharacterAge(array){
  var sortedArray = _(array)
   .map(function(item){
     return reverseString(item.name);
  })
   // .sortBy()
    .reverse()
    //.value();

  var first = reverseString(sortedArray[0]);
  return first + ' is ' + _.where(array, { name: first})[0].age;
}