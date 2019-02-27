 Write a function deepEqual that takes two values and returns true only if they are the same value or 
 are objects with the same properties, where the values of the properties are equal
 when compared with a recursive call to deepEqual.

// Your code here.

function deepEqual(object1, object2){
  if(typeof object1 == 'object' && object1 != null && 
     typeof object2 == 'object' && object2 != null){
    
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
          
    if(keys1[i] === keys2[i]){
        
      for(i=0;i < keys1.length; i++){
        
        if(object1[keys1[i]] === object2[keys2[i]]) return true; 
        else if (!deepEqual(object1[keys1[i]], object2[keys2[i]])) return false; 
                  
        }
    }
  } else return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
