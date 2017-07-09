require("./../css/a.css");
var _= require('lodash');

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
console.log(_.map(users, 'user'));

// => ['barney', 'fred']

console.log('From a.js');