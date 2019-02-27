// Your code here.
/*function range(start, end){
  let array = [];
  for(start;start<=end;start++){
    array.push(start);
  }
  return array;
};*/

function sum(array){
  let result = 0;
  array.forEach(function(number){
    result = result + number;
  })
  return result;
};

function range(start, end, step){
  let array = [];
  if(start<end){
    for(start;start<=end;start++){
      array.push(start);
      start = start + (step - 1);
    }
    return array;
  }else if(start>end){
    for(start;start>=end;start--){
      array.push(start);
      start = start + (step + 1);
    }
    return array;
  }
}
    
console.log(range(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10, 1)));
// → 55
