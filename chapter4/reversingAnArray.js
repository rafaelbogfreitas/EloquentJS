// Your code here.

//This function works, but makes the original array disappear

/*function reverseArray(array){
  let newArray = [];
  while(!array.length == 0) newArray.push(array.pop());
  return  newArray;
}*/

function reverseArray(array){
  let newArray = [];
  for(i=0;i<array.length;i++) newArray.unshift(array[i]);
  return newArray;
}

//reverse the array passed in place
function reverseArrayInPlace(array){
  for(i=0;i<Math.floor(array.length/2);i++){
    let valueA = array[i];
    let valueB = array[array.length - 1 - i];
    array[i] = valueB;
    array[array.length - 1 - i] = valueA;
  }
  return array;
}




  


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArrayInPlace(arrayValue));
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
