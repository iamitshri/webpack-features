require("./../css/b.css");
var _= require('lodash');

var array = [[0, 1], [2, 3], [4, 5]];
console.log('lets flatten this array',array);
var out = _.reduceRight(array,function(flattened,other){
    return flattened.concat(other);
},[]);
console.log(out);

console.log('This is from b.js');