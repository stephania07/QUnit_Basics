var q = QUnit;

q.test( "Hello test", function(assert) {
  assert.ok( 1 == "1", "Passed!" );
});

q.test("Addition", function() {
  equal( 2 + 2 == '6', false);
});

q.test("Multiplication", function(assert){
  equal(4*5 == '20', true );
})

q.test( "Square function", function(assert){
  var array = [1,2,3,4,5,6,7,8,9];
  var squaredArray = [1,4,9,16,25,36,49,64,81];
  var quadArray = [1,16,81,256,625,1296,2401,4096,6561];

  assert.deepEqual( squareArray(array), squaredArray );
  assert.deepEqual( squareArray(squareArray(array)), quadArray);
});

q.test("Filter numbers with sixes", function(assert) {
  var array = [1, 6, 16, 666, 'three', 'six', '75', '76'];
  var arrayWithOnlySixes = [6, 16, 666, 'six', '76'];

  assert.deepEqual(onlySixes(array), arrayWithOnlySixes);
});

q.test("Return product of an array", function(assert) {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  assert.equal(productArray(array), 362880);
});

q.test('Reverse string', function(assert) {
  assert.equal(reverseString('stephania'), 'ainahpets');
});

q.test('Reversed Descending Character Sort', function(assert) {
  var array = [
  {'name': 'barney', 'age': 36},
  {'name': 'fred', 'age': 40},
  {'name': 'pebbles', 'age': 1},
  {'name': 'sally', 'age': 7}
  ];
  assert.equal(reverseCharacterAge(array), 'sally is 7');
});

