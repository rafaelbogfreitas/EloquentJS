const min = (value1, value2) => {
  if (value1 < value2) return value1;
  else if (value1 === value2) console.log('The values entered are equal');
  else return value2;
};
  
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
