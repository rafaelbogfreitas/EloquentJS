// Your code here.


function arrayToList(array){
  	let list = null;
    for(i=array.length -1;i>=0;i--){
		list = {value: array[i], rest : list};
    }
  return list;
};

function listToArray(list){
  let array = [];
  for(let node = list; node ; node = node.rest){
    array.push(node.value);
  }
  return array;
}

function prepend(value, list){
  let newList = {value: value, rest: list};
  return newList;
}

function nth(list, position){
  let counter = 0;
  for(let node = list; node; node = node.rest){
    if(counter == position) return node.value;
    counter++;
  }
}
console.log(nth());
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
