let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.hasOwnProperty.call(map, 'one'));
// Fix this call
//console.log(map.hasOwnProperty("one"));
// → true